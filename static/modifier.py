from bs4 import BeautifulSoup

# Replace 'html_string' with your HTML code
html_string = '''
                        <div class="producto-4">
                            <div class="prodframe-4">
                                <div class="prodtitle">Producto</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Tablón</div>
                            </div>
                        </div>
                        <div class="madera-3">
                            <div class="prodframe-4">
                                <div class="prodtitle">Madera</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Cedro Rojo</div>
                            </div>
                        </div>
                        <div class="espesor-3">
                            <div class="prodframe-4">
                                <div class="prodtitle">Espesor</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                        </div>
                        <div class="ancho-2">
                            <div class="prodframe-4">
                                <div class="prodtitle">Ancho</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                        </div>
                        <div class="largo-2">
                            <div class="prodframe-4">
                                <div class="prodtitle">Largo</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                        </div>
                        <div class="cantidad-2">
                            <div class="prodframe-4">
                                <div class="prodtitle">Cantidad</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                            <div class="p1frame-3">
                                <div
                                    class="">
                                    Inches</div>
                            </div>
                        </div>
'''

soup = BeautifulSoup(html_string, 'html.parser')

for div in soup.find_all('div', {'class': ''}):
    div.replace_with(f'<input class="{div.text}" type="text" value="{div.text}" />')

print(soup.prettify())


