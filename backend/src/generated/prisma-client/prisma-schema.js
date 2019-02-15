module.exports = {
        typeDefs: /* GraphQL */ `type AggregateLabel {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Label {
  id: ID!
  title: String!
}

type LabelConnection {
  pageInfo: PageInfo!
  edges: [LabelEdge]!
  aggregate: AggregateLabel!
}

input LabelCreateInput {
  title: String!
}

input LabelCreateManyInput {
  create: [LabelCreateInput!]
  connect: [LabelWhereUniqueInput!]
}

type LabelEdge {
  node: Label!
  cursor: String!
}

enum LabelOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type LabelPreviousValues {
  id: ID!
  title: String!
}

input LabelScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [LabelScalarWhereInput!]
  OR: [LabelScalarWhereInput!]
  NOT: [LabelScalarWhereInput!]
}

type LabelSubscriptionPayload {
  mutation: MutationType!
  node: Label
  updatedFields: [String!]
  previousValues: LabelPreviousValues
}

input LabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LabelWhereInput
  AND: [LabelSubscriptionWhereInput!]
}

input LabelUpdateDataInput {
  title: String
}

input LabelUpdateInput {
  title: String
}

input LabelUpdateManyDataInput {
  title: String
}

input LabelUpdateManyInput {
  create: [LabelCreateInput!]
  update: [LabelUpdateWithWhereUniqueNestedInput!]
  upsert: [LabelUpsertWithWhereUniqueNestedInput!]
  delete: [LabelWhereUniqueInput!]
  connect: [LabelWhereUniqueInput!]
  set: [LabelWhereUniqueInput!]
  disconnect: [LabelWhereUniqueInput!]
  deleteMany: [LabelScalarWhereInput!]
  updateMany: [LabelUpdateManyWithWhereNestedInput!]
}

input LabelUpdateManyMutationInput {
  title: String
}

input LabelUpdateManyWithWhereNestedInput {
  where: LabelScalarWhereInput!
  data: LabelUpdateManyDataInput!
}

input LabelUpdateWithWhereUniqueNestedInput {
  where: LabelWhereUniqueInput!
  data: LabelUpdateDataInput!
}

input LabelUpsertWithWhereUniqueNestedInput {
  where: LabelWhereUniqueInput!
  update: LabelUpdateDataInput!
  create: LabelCreateInput!
}

input LabelWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [LabelWhereInput!]
}

input LabelWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createLabel(data: LabelCreateInput!): Label!
  updateLabel(data: LabelUpdateInput!, where: LabelWhereUniqueInput!): Label
  updateManyLabels(data: LabelUpdateManyMutationInput!, where: LabelWhereInput): BatchPayload!
  upsertLabel(where: LabelWhereUniqueInput!, create: LabelCreateInput!, update: LabelUpdateInput!): Label!
  deleteLabel(where: LabelWhereUniqueInput!): Label
  deleteManyLabels(where: LabelWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  label(where: LabelWhereUniqueInput!): Label
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label]!
  labelsConnection(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LabelConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  label(where: LabelSubscriptionWhereInput): LabelSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  birthday: String!
  role: String!
  email: String!
  password: String!
  rating: Float!
  labels(where: LabelWhereInput, orderBy: LabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Label!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  birthday: String!
  role: String!
  email: String!
  password: String!
  rating: Float
  labels: LabelCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  birthday_ASC
  birthday_DESC
  role_ASC
  role_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  rating_ASC
  rating_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  birthday: String!
  role: String!
  email: String!
  password: String!
  rating: Float!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  birthday: String
  role: String
  email: String
  password: String
  rating: Float
  labels: LabelUpdateManyInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  birthday: String
  role: String
  email: String
  password: String
  rating: Float
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  birthday: String
  birthday_not: String
  birthday_in: [String!]
  birthday_not_in: [String!]
  birthday_lt: String
  birthday_lte: String
  birthday_gt: String
  birthday_gte: String
  birthday_contains: String
  birthday_not_contains: String
  birthday_starts_with: String
  birthday_not_starts_with: String
  birthday_ends_with: String
  birthday_not_ends_with: String
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  labels_some: LabelWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    