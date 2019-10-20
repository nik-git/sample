import cherrypy

class HelloWorld(object):
    @cherrypy.expose
    def index(self):
        return "index def"

cherrypy.quickstart(HelloWorld())