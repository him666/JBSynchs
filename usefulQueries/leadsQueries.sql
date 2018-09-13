CREATE TABLE leads (
    lead_id serial primary key,
    insertion_type char(50) not null,
    email char(50) not null,
    phone int,
    contact_id int not null,
    target_provider char(50) not null,
    user_to_syncs_id int not null,
    creation_date  date default(NOW()),
    last_mod_date date, 
    unique (email, user_to_syncs_id)
)