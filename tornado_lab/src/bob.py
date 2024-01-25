import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('Showing information for username bob:<br> Real Name: Bob Jones<br>DOB: 12/31<br>Email: bob@bob.xyz')
