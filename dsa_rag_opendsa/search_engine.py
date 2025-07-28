from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pickle
import os

model = SentenceTransformer("all-MiniLM-L6-v2")

def load_index_and_chunks(path="dsa_rag_opendsa/embeddings"):
    index = faiss.read_index(os.path.join(path, "faiss_index.index"))
    with open(os.path.join(path, "chunk_metadata.pkl"), "rb") as f:
        chunks = pickle.load(f)
    return index, chunks

def query_index(question, top_k=3):
    index, chunks = load_index_and_chunks()
    query_vec = model.encode([question])
    D, I = index.search(np.array(query_vec), top_k)
    return [chunks[i] for i in I[0]]

if __name__ == "__main__":
    q = input("Ask a question: ")
    answers = query_index(q)
    for a in answers:
        print("-", a)
