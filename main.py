from flask import Flask, jsonify, render_template,session,request
from dotenv import load_dotenv
import click
import os
import time
import pymysql
from datetime import date
import textwrap
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet

def create_sales_sheet(nombre, telefono, email, mensaje, solicitud):
    # Create a SimpleDocTemplate object
    doc = SimpleDocTemplate("static/sales_sheet.pdf", pagesize=letter)

    # Create a list to hold the elements to be added to the PDF
    elements = []

    # Get the default style sheet
    styles = getSampleStyleSheet()

    styles['Heading2'].fontName = 'Helvetica'
    styles['Heading2'].fontSize = 12
    styles['Heading2'].leading = 14

    # Add elements to the list
    elements.append(Paragraph("MADERAS LAS TORRES", styles['Title']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("Rocio Aida Carballo Martinez", styles['Heading2']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("R.F.C: CAMR860623HJ2", styles['Heading2']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("CARR. A COLOMBIA #1210", styles['Heading2']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("COL. LAS MALVINAS C.P 66058", styles['Heading2']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("ESCOBEDO, N.L Tel.813.954.2919", styles['Heading2']))
    elements.append(Spacer(1, 12))
    elements.append(Paragraph("maderaslastorres@outlook.es", styles['Heading2']))
    elements.append(Spacer(1, 12))

    # Add table
    data = [["PEDIDO"], [nombre], [telefono], [email], [mensaje], [solicitud]]
    t = Table(data)
    t.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER')]))
    elements.append(t)

    # Build the PDF
    doc.build(elements)

print('PDF CREATED')

def get_connection():
    connection = pymysql.connect(
        host='127.0.0.1',
        user='root',
        password='NUNC4m13nt!',
        db='test'
    )
    return connection

def execute_query(connection, query, params=None):
    """Ejecuta una consulta SQL en la base de datos."""
    with connection.cursor() as cursor:
        cursor.execute(query, params)
        connection.commit()
        return cursor.fetchall()

def crear_app():
    app = Flask(__name__)
    app.config.from_mapping( 
        SECRET_KEY=os.environ.get('SECRET_KEY'),        
    )

    @app.route('/',methods=('POST','GET'))
    def index():
        return render_template('form.html')

    @app.route('/db', methods=['POST'])
    def db():

        table_check_query = "SHOW TABLES LIKE 'users';"
        tables = execute_query(get_connection(), table_check_query)

        # If the table does not exist, create it
        if not tables:
            create_table_query = """
                CREATE TABLE users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    uname VARCHAR(255),
                    utelefono VARCHAR(255),
                    uemail VARCHAR(255),
                    umessage TEXT,
                    usolicitud TEXT
                );
            """
            execute_query(get_connection(), create_table_query)

        formDataString = request.form['formDataString']
        
        # Parse formDataString to extract the data
        data = formDataString.split(', ')
        nombre = data[0].split(': ')[1]
        telefono = data[1].split(': ')[1]
        email = data[2].split(': ')[1]
        mensaje = data[3].split(': ')[1]
        solicitud = ', '.join(data[4:]).split(': ')[1]

        # Insert the data into the database
        query = 'INSERT INTO users (uname, utelefono, uemail, umessage, usolicitud) VALUES (%s,%s,%s,%s,%s)'
        params = (nombre, telefono, email, mensaje, solicitud)
        results = execute_query(get_connection(),query,params)
        
        create_sales_sheet(nombre, telefono, email, mensaje, solicitud)
#        subject = "Email test from Portfolio"
#        sender = "senderfromportfolio@gmail.com"
#        receiver = "receiverfromportfolio@gmail.com"
#        body = 'New message from ' + nombre + ' (' + email + ') :' + mensaje
#        password = "zphmjzagipcdjusy"

#        send_email(subject, sender, receiver, body, password)

        return 'n'

    @app.route('/update', methods=['PUT'])
    def update():
        data = request.get_json()
        folio = data['folio']

        # Open the 'METAcounter' file in write mode
        with open('static/METAcounter.txt', 'w') as file:
            # Write the new folio number to the file
            file.write(str(folio))

        return jsonify(success=True), 200

    return app

app = crear_app()


