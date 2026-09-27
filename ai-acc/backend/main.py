from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="AI-Acc Core Engine", version="1.0.0")

# السماح بالاتصال من الواجهات الأمامية للمنصة
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "success", "message": "Welcome to AI-Acc Accounting Engine connected with Wise Platform"}

@app.get("/api/v1/status")
def check_status():
    return {"module": "AI-Acc", "sync": "Active", "database": "Supabase Ready"}