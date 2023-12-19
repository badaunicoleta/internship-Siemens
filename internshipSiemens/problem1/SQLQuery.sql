CREATE DATABASE library_management_sys; 
GO 

USE library_management_sys;
GO

CREATE TABLE [dbo].[Book](
        [bookID] [int] primary key NOT NULL,
		[title] [varchar](50) NULL,
		[author] [varchar](50) NULL);
GO

CREATE TABLE [dbo].[Patron](
        [patronID] [int] primary key NOT NULL,
		[name] [varchar](50) NULL,
		[contact] [varchar](50) NULL);
GO

CREATE TABLE [dbo].[Borrowing](
        [borrowID] [int] primary key NOT NULL,
	    [book_id] [int] foreign key references Book(bookID),
		[patron_id] [int] foreign key references Patron(patronID) )
GO 

INSERT [dbo].[Book] ([bookID], [title], [author]) VALUES (1, N'Irrfan Khan: A Life in Movies', N'Shubhra Gupta')
INSERT [dbo].[Book] ([bookID], [title], [author]) VALUES (2, N'The World: A Family History', N'Simon Sebag')
INSERT [dbo].[Book] ([bookID], [title], [author]) VALUES (3, N'Breaking Barriers', N'Kaki Madhava Rao')
INSERT [dbo].[Book] ([bookID], [title], [author]) VALUES (4, N'Ambedkar: A Life', N'Shashi Tharoor')
INSERT [dbo].[Book] ([bookID], [title], [author]) VALUES (5, N'Human Anatomy', N'Ashvini Kumar Dwivedi')
GO 

INSERT [dbo].[Patron] ([patronID], [name], [contact]) VALUES (101, N'Petricescu Paul', N'0745234134')
INSERT [dbo].[Patron] ([patronID], [name], [contact]) VALUES (102, N'Antonesi Melisa', N'0749876234')
INSERT [dbo].[Patron] ([patronID], [name], [contact]) VALUES (103, N'Furcovici Dalia', N'0756123678')
INSERT [dbo].[Patron] ([patronID], [name], [contact]) VALUES (104, N'Cautis Luca', N'0756789967')
INSERT [dbo].[Patron] ([patronID], [name], [contact]) VALUES (105, N'Irimia Laurențiu', N'0756743212')

INSERT [dbo].[Borrowing] ([borrowID], [book_id], [patron_id]) VALUES (501, 1, 101)
INSERT [dbo].[Borrowing] ([borrowID], [book_id], [patron_id]) VALUES (502, 2, 102)
INSERT [dbo].[Borrowing] ([borrowID], [book_id], [patron_id]) VALUES (503, 3, 103)
INSERT [dbo].[Borrowing] ([borrowID], [book_id], [patron_id]) VALUES (504, 4, 104)
INSERT [dbo].[Borrowing] ([borrowID], [book_id], [patron_id]) VALUES (505, 5, 105)

SELECT* FROM Book 

SELECT* FROM Patron

SELECT* FROM Borrowing