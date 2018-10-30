INSERT INTO  source_options(option_type, option_name, option_display_name, option_value_1, option_mask_1, option_value_2, option_mask_2) VALUES 
('R/W',	'message_share_click',	' Message share click',	true,	'B',	true),
('R/W',	'message_share',	' Message share',	true,	'B',	true),
('R/W',	'message_click',	' Message click',	true,	'B',	true),
('R/W',	'message_open',	' Message open',	true,	'B',	true),
('R/W',	'member_status_update',	' Member status update',	true,	'B',	true),	
('R/W',	'ReportRequested',	'Report requested',	true,	'B',	true),
('R/W',	'ReportSent',	'Report sent',	true,	'B',	true),
('R/W',	'ReportViewed',	'Report viewed',	true,	'B',	true),
('R/W',	'ConsumerEditSchedule',	'Consumer edit schedule',	true,	'B',	true),
('R/W',	'member_optout',	'Member Optout',	true,	'B',	true),
('R/W',	'message_forward',	'Message Forward',	true,	'B',	true),
('R/W',	'Inquiry',	'Recipient Requested More Information',	true,	'B',	true),
('R/W',	'Unsubscribed',	'Unsubscribed',	true,	'B',	true);

('R/W',	'message_share_click',	' Message share click',	true,	'B',	true),
('R/W',	'message_share',	' Message share',	true,	'B',	true),
('R/W',	'message_click',	' Message click',	true,	'B',	true),
('R/W',	'message_open',	' Message open',	true,	'B',	true),
('R/W',	'member_status_update',	' Member status update',	true,	'B',	true),	
('R/W',	'ReportRequested',	'Report requested',	true,	'B',	true),
('R/W',	'ReportSent',	'Report sent',	true,	'B',	true),
('R/W',	'ReportViewed',	'Report viewed',	true,	'B',	true),
('R/W',	'ConsumerEditSchedule',	'Consumer edit schedule',	true,	'B',	true),



UPDATE source_options
SET option_value_1 = true,
    option_value_2 = true,
    option_mask_1 = 'B',
    option_type = 'R/W'
WHERE
 source_option_id;

underscore => 50
normal => 51

INSERT INTO source_app_to_source_options(source_id, source_option_id) VALUES
(50, 47), (50, 46),(50, 36),(50, 37),(50, 38),(50, 39),(50, 40),(51, 48),(51, 44),
(51, 49),(51, 45),(51, 42),(51, 43);




INSERT INTO  source_options(option_type, option_name, option_display_name, option_value_1, option_mask_1, option_value_2, option_mask_2)VALUES 
('R/W',	'SHOWING_REQUEST',	'Showing Request',	true,	'B',	true, 'activity'),
('R/W',	'REQUEST_INFORMATION',	'Information Request',	true,	'B',	true, 'activity'),
('R/W',	'FAVORITE_LISTING',	'Listing Favorited',	true,	'B',	true, 'activity'),
('R/W',	'INITIAL_LANDING',	'Initial Landing',	true,	'B',	true, 'activity'),
('R/W',	'SEARCH',	'Performed Search',	true,	'B',	true, 'activity'),
('R/W',	'SAVED_SEARCH',	'Saved Search',	true,	'B',	true, 'activity'),
('R/W',	'VIEW_LISTING_DETAIL',	'Viewed Listing Detail',	false,	'B',	true, 'activity'),
('R/W',	'QUESTIONNAIRE_SUBMISSION',	'Questionnaire  Submission',	true,	'B',	true, 'activity'),
('R/W',	'REGISTER',	'Registration',	true,	'B',	true, 'activity'),
('R/W',	'STATS_UPDATE',	'Updated Stats',	false,	'B',	true, 'activity'),
('R/W',	'PRIORITY_LEAD_EVENT',	' Priority Lead Event',	false,	'B',	true, 'activity');



//52 ylopo id

INSERT INTO source_app_to_source_options(source_id, source_option_id) VALUES
(52,51),
(52,52),
(52,53),
(52,54),
(52,55),
(52,56),
(52,57),
(52,58),
(52,59),
(52,60),
(52,61);

UPDATE source_options
SET option_value_1= false
WHERE
 source_option_id = 59 ;