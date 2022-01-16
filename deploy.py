import os

BASE_DIR = os.getcwd()

react = input("React static?: ")
react = False if react.lower() == 'no' else True
if react:
    os.chdir(f'{BASE_DIR}/frontend')
    os.system('npm run build')
django = input("Django static?: ")
django = False if django.lower() == 'no' else True
if django:
    os.chdir(f'{BASE_DIR}')
    os.system('python manage.py collectstatic --noinput')
os.system('git add .')
commit = input('Input Commit Message: ')
os.system(f'git commit -m "{commit}"')
os.system('git push')
