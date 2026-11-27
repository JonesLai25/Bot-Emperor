import csv
import sys


def total(path):
    with open(path, newline='', encoding='utf-8') as f:
        return sum(float(row['amount']) for row in csv.DictReader(f) if float(row['amount']) > 0)


if __name__ == '__main__':
    print(f'{total(sys.argv[1]):.2f}')
