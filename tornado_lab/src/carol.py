import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('Showing information for username carol:<br> Real Name: Carol Ling<br>DOB: 6/17<br>Email: carol@example.com')


