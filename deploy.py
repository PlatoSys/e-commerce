import os

BASE_DIR = os.getcwd()

react = bool(input("React static?: ") or True)
if react:
    os.chdir(f'{BASE_DIR}/frontend')
    os.system('npm run build')
django = bool(input("Django static?: ") or True)
if django:
    os.chdir(f'{BASE_DIR}')
    os.system('python manage.py collectstatic --noinput')
os.system('git add .')
commit = input('Input Commit Message: ')
os.system(f'git commit -m "{commit}"')
os.system('git push')
