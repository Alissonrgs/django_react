clean:
	./manage.py clean_pyc

requirements-local:
	pip install -r requirements/local.txt

runserver:
	./manage.py runserver 0.0.0.0:8000

migrate:
	./manage.py migrate

migrations:
	./manage.py makemigrations

showmigrations:
	./manage.py showmigrations

urls:
	./manage.py show_urls

shell:
	./manage.py shell_plus

shell-sql:
	./manage.py shell_plus --print-sql

create-local-settings:
	cp dj/local_settings.example.py dj/local_settings.py
