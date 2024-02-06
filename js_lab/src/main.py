import asyncio
import tornado.web

import index
import os

settings = {"static_path": os.path.join(os.path.dirname(__file__), "static")}

def makeApp():
    endpoints=[
        ("/", index.Handler)
    ]
    app = tornado.web.Application(endpoints)
    app.listen(8000)
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()