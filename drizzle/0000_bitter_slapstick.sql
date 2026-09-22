CREATE TABLE `planner_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`subject` text NOT NULL,
	`item_type` text NOT NULL,
	`date` text NOT NULL,
	`start_time` text DEFAULT '' NOT NULL,
	`end_time` text DEFAULT '' NOT NULL,
	`priority` text DEFAULT 'Média' NOT NULL,
	`completed` integer DEFAULT false NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_planner_items_date` ON `planner_items` (`date`);--> statement-breakpoint
CREATE INDEX `idx_planner_items_type_date` ON `planner_items` (`item_type`,`date`);--> statement-breakpoint
PRAGMA optimize;
