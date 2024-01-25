import asyncio
import tornado.web

import index
import bob
import alice
import carol
import dave


def makeApp():
    endpoints=[
        ("/",index.Handler),
        ("/profile/bob",bob.Handler),
        ("/profile/alice",alice.Handler),
        ("/profile/carol",carol.Handler),
        ("/profile/dave",dave.Handler)
    ]
    app = tornado.web.Application(endpoints)
    app.listen(8000)
    return app

if __name__ == "__main__":
    app = makeApp()
    asyncio.get_event_loop().run_forever()