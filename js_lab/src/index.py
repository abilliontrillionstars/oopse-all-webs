import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")
        self.render_linked_css("style.css")
