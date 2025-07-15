# dsa_rag_opendsa/embed_generator.py

from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pickle
import os

def load_chunks(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]

def generate_embeddings(chunks, model_name="all-MiniLM-L6-v2"):
    model = SentenceTransformer(model_name)
    return model.encode(chunks)

def store_faiss_index(embeddings, chunks, output_dir="dsa_rag_opendsa/embeddings"):
    os.makedirs(output_dir, exist_ok=True)
    dim = embeddings.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(np.array(embeddings))
    faiss.write_index(index, os.path.join(output_dir, "faiss_index.index"))
    with open(os.path.join(output_dir, "intro_chunks.pkl"), "wb") as f:
        pickle.dump(chunks, f)

if __name__ == "__main__":
    chunks = load_chunks("dsa_rag_opendsa/data_enriched/intro_ds_enriched.txt")
    embeddings = generate_embeddings(chunks)
    store_faiss_index(embeddings, chunks)
    print("✅ Embeddings and FAISS index saved.")
