-- Run these commands in your PostgreSQL database to create the tables

-- Projects table
CREATE TABLE IF NOT EXISTS "Project" (
    "id" VARCHAR(255) PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Certifications table
CREATE TABLE IF NOT EXISTS "Certification" (
    "id" VARCHAR(255) PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "details" TEXT NOT NULL,
    "imageUrl" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Bio table (Single record)
CREATE TABLE IF NOT EXISTS "Bio" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Education table
CREATE TABLE IF NOT EXISTS "Education" (
    "id" VARCHAR(255) PRIMARY KEY,
    "degree" VARCHAR(255) NOT NULL,
    "university" VARCHAR(255) NOT NULL,
    "date" VARCHAR(255) NOT NULL,
    "details" TEXT,
    "imageUrl" VARCHAR(255),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- SOP table (Single record)
CREATE TABLE IF NOT EXISTS "SOP" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Hero table (Single record)
CREATE TABLE IF NOT EXISTS "Hero" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL,
    "imageUrl" VARCHAR(255),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial empty/placeholder data for single-record tables if they don't exist
INSERT INTO "Bio" (id, content) VALUES (1, 'Add your bio here...') ON CONFLICT (id) DO NOTHING;
INSERT INTO "SOP" (id, content) VALUES (1, 'Add your SOP here...') ON CONFLICT (id) DO NOTHING;
INSERT INTO "Hero" (id, name, role) VALUES (1, 'Arsalan Ayaz', 'AI & Computational Chemistry Researcher') ON CONFLICT (id) DO NOTHING;
