import type * as schema from './schema.ts';

export type IUser = typeof schema.chiiUsers.$inferSelect;
export type IUserFields = typeof schema.chiiUserFields.$inferSelect;

export type IFriend = typeof schema.chiiFriends.$inferSelect;

export type ISubject = typeof schema.chiiSubjects.$inferSelect;
export type ISubjectFields = typeof schema.chiiSubjectFields.$inferSelect;
export type ISubjectInterest = typeof schema.chiiSubjectInterests.$inferSelect;
export type ISubjectRelation = typeof schema.chiiSubjectRelations.$inferSelect;

export type IEpisode = typeof schema.chiiEpisodes.$inferSelect;

export type ICharacter = typeof schema.chiiCharacters.$inferSelect;
export type ICharacterSubject = typeof schema.chiiCharacterSubjects.$inferSelect;

export type IPerson = typeof schema.chiiPersons.$inferSelect;
export type IPersonCollect = typeof schema.chiiPersonCollects.$inferSelect;
export type IPersonRelation = typeof schema.chiiPersonRelations.$inferSelect;
export type IPersonSubject = typeof schema.chiiPersonSubjects.$inferSelect;

export type IIndex = typeof schema.chiiIndex.$inferSelect;
export type IIndexCollect = typeof schema.chiiIndexCollects.$inferSelect;
