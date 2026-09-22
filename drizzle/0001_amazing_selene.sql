CREATE TABLE `study_progress` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`block_key` text NOT NULL,
	`completed` integer DEFAULT false NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_study_progress_block_key` ON `study_progress` (`block_key`);--> statement-breakpoint
PRAGMA optimize;
