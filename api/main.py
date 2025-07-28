from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dsa_rag_opendsa.search_engine import query_index
from dsa_rag_opendsa.llm_refiner import generate_refined_answer

app = FastAPI()

# 👇 Allow frontend origin (update if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["*"] for all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str

@app.post("/ask-doubt")
def ask_doubt(query: Query):
    question = query.question
    chunks = query_index(question, top_k=3)
    context = "\n".join(chunks)
    answer = generate_refined_answer(question, context)
    return {"question": question, "answer": answer}
