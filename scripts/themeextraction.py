import spacy

nlp = spacy.load("en_core_web_sm")

def extract_theme(text):
    doc = nlp(text)

    # Step 1: Look for named entities first
    entities = [ent.text for ent in doc.ents if ent.label_ in ["ORG", "GPE", "PRODUCT", "EVENT", "WORK_OF_ART", "LAW", "LANGUAGE"]]
    if entities:
        return truncate_to_two_words(entities[0])

    # Step 2: Look for noun chunks, avoiding pronouns and stop words
    noun_chunks = [
        chunk.text for chunk in doc.noun_chunks 
        if not any(token.pos_ in ["PRON"] for token in chunk)  # Avoid pronouns
        and not chunk.root.is_stop
        and chunk.root.pos_ in ["NOUN", "PROPN"]
    ]

    if noun_chunks:
        # Prioritize noun chunks based on length and specificity
        sorted_noun_chunks = sorted(noun_chunks, key=lambda x: (len(x.split()), len(x)), reverse=True)
        return truncate_to_two_words(sorted_noun_chunks[0])

    # Step 3: Fallback to nouns and adjectives that aren't pronouns
    content_words = [
        token.text for token in doc 
        if token.pos_ in ["NOUN", "ADJ"] 
        and not token.is_stop 
        and token.dep_ != "poss"  # Avoid possessives like "my"
    ]
    if content_words:
        return truncate_to_two_words(" ".join(content_words))

    # Step 4: As a last resort, return the most frequent non-stopword
    non_stopwords = [token.text for token in doc if not token.is_stop]
    return truncate_to_two_words(max(non_stopwords, key=len)) if non_stopwords else "Conversation"

def truncate_to_two_words(phrase):
    words = phrase.split()
    # Skip over pronouns and possessives
    meaningful_words = [word for word in words if word.lower() not in ["my", "his", "her", "their", "the"]]
    return " ".join(meaningful_words[:2]) if meaningful_words else " ".join(words[:2])


