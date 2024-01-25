import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('Showing information for username dave:<br> Real Name: Dave N. Port<br>DOB: 4/14<br>Email: dave@dave.dave')
