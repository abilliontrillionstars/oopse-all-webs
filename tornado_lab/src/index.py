import tornado.web

class Handler(tornado.web.RequestHandler):
    def get(self):
        self.write('<a href="/profile/alice">Alice\'s Profile</a><br><a href="/profile/bob">Bob\'s Profile</a><br><a href="/profile/carol">Carol\'s Profile</a><br><a href="/profile/dave">Dave\'s Profile</a>')
