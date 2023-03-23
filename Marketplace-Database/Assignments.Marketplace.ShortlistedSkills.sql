USE [Marketplace]
GO

/****** Object:  Table [Assignments].[ShortlistedSkills]    Script Date: 23-03-2023 17:15:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Assignments].[ShortlistedSkills](
	[ShortlistsId] [int] NOT NULL,
	[ShortlistedEmployeeId] [nvarchar](12) NOT NULL,
	[ShortlistedSkillId] [int] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [Assignments].[ShortlistedSkills]  WITH CHECK ADD  CONSTRAINT [FK_ShortlistedSkills_EmployeesSkills] FOREIGN KEY([ShortlistedSkillId])
REFERENCES [Profiles].[EmployeesSkills] ([SkillId])
GO

ALTER TABLE [Assignments].[ShortlistedSkills] CHECK CONSTRAINT [FK_ShortlistedSkills_EmployeesSkills]
GO

ALTER TABLE [Assignments].[ShortlistedSkills]  WITH CHECK ADD  CONSTRAINT [FK_ShortlistedSkills_Shortlists] FOREIGN KEY([ShortlistsId])
REFERENCES [Assignments].[Shortlists] ([ShortlistsId])
GO

ALTER TABLE [Assignments].[ShortlistedSkills] CHECK CONSTRAINT [FK_ShortlistedSkills_Shortlists]
GO


