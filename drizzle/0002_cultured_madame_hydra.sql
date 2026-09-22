CREATE TABLE `quiz_progress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`question_id` text NOT NULL,
	`discipline_id` text NOT NULL,
	`last_correct` integer DEFAULT false NOT NULL,
	`times_answered` integer DEFAULT 1 NOT NULL,
	`correct_count` integer DEFAULT 0 NOT NULL,
	`first_answered_at` text NOT NULL,
	`last_answered_at` text NOT NULL,
	`next_review_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_quiz_progress_question_id` ON `quiz_progress` (`question_id`);--> statement-breakpoint
CREATE INDEX `idx_quiz_progress_discipline_review` ON `quiz_progress` (`discipline_id`,`next_review_at`);