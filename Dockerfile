FROM python:3

#INSTALL FLASK AND COPY REQUIRED DIRECTORIES.
WORKDIR /app
COPY . /app

# Instala las dependencias de tu aplicación
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

# Configura las variables de entorno
ENV FLASK_DEBUG=True
ENV FLASK_APP=main.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000
ENV SECRET_KEY=esly
           
# Ejecuta tu aplicación Flask utilizando el comando "flask run"
CMD ["flask", "run"]
