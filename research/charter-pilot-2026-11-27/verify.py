import csv
import importlib.util
import pathlib
import sys
import tempfile

path = pathlib.Path(sys.argv[1]) / 'total.py'
spec = importlib.util.spec_from_file_location('candidate', path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
cases = [(['12.50', '2.25'], 14.75), (['10', '', '-3.25'], 6.75), (['', '0'], 0), (['-4', '-5'], -9)]
for values, expected in cases:
    with tempfile.NamedTemporaryFile(mode='w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['amount'])
        writer.writerows([[x] for x in values])
        f.flush()
        actual = module.total(f.name)
        assert abs(float(actual) - expected) < 0.00001, (values, actual, expected)
print(f'PASS {len(cases)} cases')
