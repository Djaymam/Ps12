CREATE TABLE IF NOT EXISTS public.user_info
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 7 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    user_name character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_info_pkey PRIMARY KEY (id),
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT unique_user_name UNIQUE (user_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_info
    OWNER to postgres;