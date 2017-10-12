web: gunicorn moim.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app=moim --loglevel=info
