import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const plannerItems = sqliteTable(
  "planner_items",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    subject: text("subject").notNull(),
    itemType: text("item_type").notNull(),
    date: text("date").notNull(),
    startTime: text("start_time").notNull().default(""),
    endTime: text("end_time").notNull().default(""),
    priority: text("priority").notNull().default("Média"),
    completed: integer("completed", { mode: "boolean" }).notNull().default(false),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    index("idx_planner_items_date").on(table.date),
    index("idx_planner_items_type_date").on(table.itemType, table.date),
  ],
);

export const studyProgress = sqliteTable(
  "study_progress",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    blockKey: text("block_key").notNull(),
    completed: integer("completed", { mode: "boolean" }).notNull().default(false),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [uniqueIndex("idx_study_progress_block_key").on(table.blockKey)],
);

export const quizProgress = sqliteTable(
  "quiz_progress",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    questionId: text("question_id").notNull(),
    disciplineId: text("discipline_id").notNull(),
    lastCorrect: integer("last_correct", { mode: "boolean" }).notNull().default(false),
    lastAnswer: integer("last_answer").notNull().default(0),
    timesAnswered: integer("times_answered").notNull().default(1),
    correctCount: integer("correct_count").notNull().default(0),
    firstAnsweredAt: text("first_answered_at").notNull(),
    lastAnsweredAt: text("last_answered_at").notNull(),
    nextReviewAt: text("next_review_at").notNull(),
  },
  (table) => [
    uniqueIndex("idx_quiz_progress_question_id").on(table.questionId),
    index("idx_quiz_progress_discipline_review").on(table.disciplineId, table.nextReviewAt),
  ],
);

export const quizDailyAssignments = sqliteTable(
  "quiz_daily_assignments",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    studyDate: text("study_date").notNull(),
    questionId: text("question_id").notNull(),
    assignmentType: text("assignment_type").notNull().default("new"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    uniqueIndex("idx_quiz_daily_date_question").on(table.studyDate, table.questionId),
    index("idx_quiz_daily_study_date").on(table.studyDate),
  ],
);
