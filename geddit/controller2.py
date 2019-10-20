import operator, os, pickle, sys
import cherrypy
from genshi.template import TemplateLoader
from genshi.builder import tag

loader = TemplateLoader(
    os.path.join(os.path.dirname(__file__), 'templates'),
    auto_reload=True
)
class Root(object):
    def greeting2(self, arg):
        return tag.b('Hello, %s!' % arg)
   
    @cherrypy.expose
    def index(self):
        tmpl = loader.load('index.html')
        return tmpl.generate(dict1={'foo':"fooOne"},greeting2=self.greeting2('nikhil'),test_bool=False).render('html', doctype='html')

cherrypy.quickstart(Root(), '/', {})

# def main(filename):
#     data = {} # We'll replace this later

#     # Some global configuration; note that this could be moved into a
#     # configuration file
#     cherrypy.config.update({
#         'tools.encode.on': True, 
#         'tools.encode.encoding': 'utf-8',
#         'tools.decode.on': True,
#         'tools.trailing_slash.on': True,
#         'tools.staticdir.root': os.path.abspath(os.path.dirname(__file__)),
#     })
# #cherrypy.q
#     cherrypy.quickstart(Root(data), '/nik', {
#         '/media': {
#             'tools.staticdir.on': True,
#             'tools.staticdir.dir': 'static'
#         }
#     })

# if __name__ == '__main__':
#     main(sys.argv[1])