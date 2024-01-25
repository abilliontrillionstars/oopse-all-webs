import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('Showing information for username alice:<br> Real Name: Alice Smith<br>DOB: 1/1<br>Email: alice@example.com')
