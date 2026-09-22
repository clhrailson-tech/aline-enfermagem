CREATE TABLE `quiz_daily_assignments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`study_date` text NOT NULL,
	`question_id` text NOT NULL,
	`assignment_type` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_quiz_daily_date_question` ON `quiz_daily_assignments` (`study_date`,`question_id`);--> statement-breakpoint
CREATE INDEX `idx_quiz_daily_study_date` ON `quiz_daily_assignments` (`study_date`);