import random
import string

import cherrypy


class StringGenerator(object):
    @cherrypy.expose
    def index(self):
        return """<html xmlns = "http://www.w3.org/1999/xhtml"
                    xmlns:py = "http://genshi.edgewall.org/"
                    lang = "en">
          <head></head>
          <body>
            <form method="get" action="generate">
              <input type="text" value="8" name="length" />
              <button type="submit">Give it now!</button>
            </form>
          </body>
        </html>"""

    @cherrypy.expose
    def generate(self, length=8):
        return length


if __name__ == '__main__':
    cherrypy.quickstart(StringGenerator())
