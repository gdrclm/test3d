import os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path


def main() -> None:
    root = Path(__file__).resolve().parent
    port = 4173
    os.chdir(root)
    server = ThreadingHTTPServer(("127.0.0.1", port), SimpleHTTPRequestHandler)

    print(f"Serving {root}")
    print(f"Open http://127.0.0.1:{port}/scene_viewer/")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
