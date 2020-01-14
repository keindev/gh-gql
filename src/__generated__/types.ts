/* eslint-disable */
/* cSpell:disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    URI: string;
    DateTime: string;
    HTML: string;
    GitObjectID: string;
    GitTimestamp: string;
    GitSSHRemote: string;
    Date: string;
    PreciseDateTime: string;
    X509Certificate: string;
};

export type IAcceptEnterpriseAdministratorInvitationInput = {
    invitationId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAcceptEnterpriseAdministratorInvitationPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    invitation: Maybe<IEnterpriseAdministratorInvitation>;
    message: Maybe<Scalars['String']>;
};

export type IAcceptTopicSuggestionInput = {
    repositoryId: Scalars['ID'];
    name: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAcceptTopicSuggestionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    topic: Maybe<ITopic>;
};

export enum ActionExecutionCapabilitySetting {
    Disabled = 'DISABLED',
    AllActions = 'ALL_ACTIONS',
    LocalActionsOnly = 'LOCAL_ACTIONS_ONLY',
    NoPolicy = 'NO_POLICY',
}

export type IActor = {
    avatarUrl: Scalars['URI'];
    login: Scalars['String'];
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
};

export type IActorAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IActorLocation = {
    city: Maybe<Scalars['String']>;
    country: Maybe<Scalars['String']>;
    countryCode: Maybe<Scalars['String']>;
    region: Maybe<Scalars['String']>;
    regionCode: Maybe<Scalars['String']>;
};

export type IAddAssigneesToAssignableInput = {
    assignableId: Scalars['ID'];
    assigneeIds: Array<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddAssigneesToAssignablePayload = {
    assignable: Maybe<IAssignable>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddCommentInput = {
    subjectId: Scalars['ID'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    commentEdge: Maybe<IIssueCommentEdge>;
    subject: Maybe<INode>;
    timelineEdge: Maybe<IIssueTimelineItemEdge>;
};

export type IAddedToProjectEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type IAddLabelsToLabelableInput = {
    labelableId: Scalars['ID'];
    labelIds: Array<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddLabelsToLabelablePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    labelable: Maybe<ILabelable>;
};

export type IAddProjectCardInput = {
    projectColumnId: Scalars['ID'];
    contentId: Maybe<Scalars['ID']>;
    note: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddProjectCardPayload = {
    cardEdge: Maybe<IProjectCardEdge>;
    clientMutationId: Maybe<Scalars['String']>;
    projectColumn: Maybe<IProjectColumn>;
};

export type IAddProjectColumnInput = {
    projectId: Scalars['ID'];
    name: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddProjectColumnPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    columnEdge: Maybe<IProjectColumnEdge>;
    project: Maybe<IProject>;
};

export type IAddPullRequestReviewCommentInput = {
    pullRequestReviewId: Scalars['ID'];
    commitOID: Maybe<Scalars['GitObjectID']>;
    body: Scalars['String'];
    path: Maybe<Scalars['String']>;
    position: Maybe<Scalars['Int']>;
    inReplyTo: Maybe<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddPullRequestReviewCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    comment: Maybe<IPullRequestReviewComment>;
    commentEdge: Maybe<IPullRequestReviewCommentEdge>;
};

export type IAddPullRequestReviewInput = {
    pullRequestId: Scalars['ID'];
    commitOID: Maybe<Scalars['GitObjectID']>;
    body: Maybe<Scalars['String']>;
    event: Maybe<PullRequestReviewEvent>;
    comments: Maybe<Array<Maybe<IDraftPullRequestReviewComment>>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddPullRequestReviewPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
    reviewEdge: Maybe<IPullRequestReviewEdge>;
};

export type IAddReactionInput = {
    subjectId: Scalars['ID'];
    content: ReactionContent;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddReactionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    reaction: Maybe<IReaction>;
    subject: Maybe<IReactable>;
};

export type IAddStarInput = {
    starrableId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IAddStarPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    starrable: Maybe<IStarrable>;
};

export type IApp = INode & {
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    description: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    logoBackgroundColor: Scalars['String'];
    logoUrl: Scalars['URI'];
    name: Scalars['String'];
    slug: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    url: Scalars['URI'];
};

export type IAppLogoUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IAppEdge = {
    cursor: Scalars['String'];
    node: Maybe<IApp>;
};

export type IArchiveRepositoryInput = {
    repositoryId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IArchiveRepositoryPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type IAssignable = {
    assignees: IUserConnection;
};

export type IAssignableAssigneesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IAssignedEvent = INode & {
    actor: Maybe<IActor>;
    assignable: IAssignable;
    assignee: Maybe<IAssignee>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    user: Maybe<IUser>;
};

export type IAssignee = IBot | IMannequin | IOrganization | IUser;

export type IAuditEntry = {
    action: Scalars['String'];
    actor: Maybe<IAuditEntryActor>;
    actorIp: Maybe<Scalars['String']>;
    actorLocation: Maybe<IActorLocation>;
    actorLogin: Maybe<Scalars['String']>;
    actorResourcePath: Maybe<Scalars['URI']>;
    actorUrl: Maybe<Scalars['URI']>;
    createdAt: Scalars['PreciseDateTime'];
    operationType: Maybe<OperationType>;
    user: Maybe<IUser>;
    userLogin: Maybe<Scalars['String']>;
    userResourcePath: Maybe<Scalars['URI']>;
    userUrl: Maybe<Scalars['URI']>;
};

export type IAuditEntryActor = IBot | IOrganization | IUser;

export type IAuditLogOrder = {
    field: Maybe<AuditLogOrderField>;
    direction: Maybe<OrderDirection>;
};

export enum AuditLogOrderField {
    CreatedAt = 'CREATED_AT',
}

export type IBaseRefChangedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type IBaseRefForcePushedEvent = INode & {
    actor: Maybe<IActor>;
    afterCommit: Maybe<ICommit>;
    beforeCommit: Maybe<ICommit>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    ref: Maybe<IRef>;
};

export type IBlame = {
    ranges: Array<IBlameRange>;
};

export type IBlameRange = {
    age: Scalars['Int'];
    commit: ICommit;
    endingLine: Scalars['Int'];
    startingLine: Scalars['Int'];
};

export type IBlob = INode &
    IGitObject & {
        abbreviatedOid: Scalars['String'];
        byteSize: Scalars['Int'];
        commitResourcePath: Scalars['URI'];
        commitUrl: Scalars['URI'];
        id: Scalars['ID'];
        isBinary: Scalars['Boolean'];
        isTruncated: Scalars['Boolean'];
        oid: Scalars['GitObjectID'];
        repository: IRepository;
        text: Maybe<Scalars['String']>;
    };

export type IBot = INode &
    IActor &
    IUniformResourceLocatable & {
        avatarUrl: Scalars['URI'];
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        id: Scalars['ID'];
        login: Scalars['String'];
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
    };

export type IBotAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IBranchProtectionRule = INode & {
    branchProtectionRuleConflicts: IBranchProtectionRuleConflictConnection;
    creator: Maybe<IActor>;
    databaseId: Maybe<Scalars['Int']>;
    dismissesStaleReviews: Scalars['Boolean'];
    id: Scalars['ID'];
    isAdminEnforced: Scalars['Boolean'];
    matchingRefs: IRefConnection;
    pattern: Scalars['String'];
    pushAllowances: IPushAllowanceConnection;
    repository: Maybe<IRepository>;
    requiredApprovingReviewCount: Maybe<Scalars['Int']>;
    requiredStatusCheckContexts: Maybe<Array<Maybe<Scalars['String']>>>;
    requiresApprovingReviews: Scalars['Boolean'];
    requiresCodeOwnerReviews: Scalars['Boolean'];
    requiresCommitSignatures: Scalars['Boolean'];
    requiresStatusChecks: Scalars['Boolean'];
    requiresStrictStatusChecks: Scalars['Boolean'];
    restrictsPushes: Scalars['Boolean'];
    restrictsReviewDismissals: Scalars['Boolean'];
    reviewDismissalAllowances: IReviewDismissalAllowanceConnection;
};

export type IBranchProtectionRuleBranchProtectionRuleConflictsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IBranchProtectionRuleMatchingRefsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IBranchProtectionRulePushAllowancesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IBranchProtectionRuleReviewDismissalAllowancesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IBranchProtectionRuleConflict = {
    branchProtectionRule: Maybe<IBranchProtectionRule>;
    conflictingBranchProtectionRule: Maybe<IBranchProtectionRule>;
    ref: Maybe<IRef>;
};

export type IBranchProtectionRuleConflictConnection = {
    edges: Maybe<Array<Maybe<IBranchProtectionRuleConflictEdge>>>;
    nodes: Maybe<Array<Maybe<IBranchProtectionRuleConflict>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IBranchProtectionRuleConflictEdge = {
    cursor: Scalars['String'];
    node: Maybe<IBranchProtectionRuleConflict>;
};

export type IBranchProtectionRuleConnection = {
    edges: Maybe<Array<Maybe<IBranchProtectionRuleEdge>>>;
    nodes: Maybe<Array<Maybe<IBranchProtectionRule>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IBranchProtectionRuleEdge = {
    cursor: Scalars['String'];
    node: Maybe<IBranchProtectionRule>;
};

export type ICancelEnterpriseAdminInvitationInput = {
    invitationId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICancelEnterpriseAdminInvitationPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    invitation: Maybe<IEnterpriseAdministratorInvitation>;
    message: Maybe<Scalars['String']>;
};

export type IChangeUserStatusInput = {
    emoji: Maybe<Scalars['String']>;
    message: Maybe<Scalars['String']>;
    organizationId: Maybe<Scalars['ID']>;
    limitedAvailability: Maybe<Scalars['Boolean']>;
    expiresAt: Maybe<Scalars['DateTime']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IChangeUserStatusPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    status: Maybe<IUserStatus>;
};

export type IClearLabelsFromLabelableInput = {
    labelableId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IClearLabelsFromLabelablePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    labelable: Maybe<ILabelable>;
};

export type ICloneProjectInput = {
    targetOwnerId: Scalars['ID'];
    sourceId: Scalars['ID'];
    includeWorkflows: Scalars['Boolean'];
    name: Scalars['String'];
    body: Maybe<Scalars['String']>;
    public: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICloneProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    jobStatusId: Maybe<Scalars['String']>;
    project: Maybe<IProject>;
};

export type ICloneTemplateRepositoryInput = {
    repositoryId: Scalars['ID'];
    name: Scalars['String'];
    ownerId: Scalars['ID'];
    description: Maybe<Scalars['String']>;
    visibility: RepositoryVisibility;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICloneTemplateRepositoryPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type IClosable = {
    closed: Scalars['Boolean'];
    closedAt: Maybe<Scalars['DateTime']>;
};

export type IClosedEvent = INode &
    IUniformResourceLocatable & {
        actor: Maybe<IActor>;
        closable: IClosable;
        closer: Maybe<ICloser>;
        createdAt: Scalars['DateTime'];
        id: Scalars['ID'];
        resourcePath: Scalars['URI'];
        url: Scalars['URI'];
    };

export type ICloseIssueInput = {
    issueId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICloseIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    issue: Maybe<IIssue>;
};

export type IClosePullRequestInput = {
    pullRequestId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IClosePullRequestPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
};

export type ICloser = ICommit | IPullRequest;

export type ICodeOfConduct = INode & {
    body: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    key: Scalars['String'];
    name: Scalars['String'];
    resourcePath: Maybe<Scalars['URI']>;
    url: Maybe<Scalars['URI']>;
};

export enum CollaboratorAffiliation {
    Outside = 'OUTSIDE',
    Direct = 'DIRECT',
    All = 'ALL',
}

export type ICollectionItemContent = IOrganization | IRepository | IUser;

export type IComment = {
    author: Maybe<IActor>;
    authorAssociation: CommentAuthorAssociation;
    body: Scalars['String'];
    bodyHTML: Scalars['HTML'];
    bodyText: Scalars['String'];
    createdAt: Scalars['DateTime'];
    createdViaEmail: Scalars['Boolean'];
    editor: Maybe<IActor>;
    id: Scalars['ID'];
    includesCreatedEdit: Scalars['Boolean'];
    lastEditedAt: Maybe<Scalars['DateTime']>;
    publishedAt: Maybe<Scalars['DateTime']>;
    updatedAt: Scalars['DateTime'];
    userContentEdits: Maybe<IUserContentEditConnection>;
    viewerDidAuthor: Scalars['Boolean'];
};

export type ICommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export enum CommentAuthorAssociation {
    Member = 'MEMBER',
    Owner = 'OWNER',
    Collaborator = 'COLLABORATOR',
    Contributor = 'CONTRIBUTOR',
    FirstTimeContributor = 'FIRST_TIME_CONTRIBUTOR',
    FirstTimer = 'FIRST_TIMER',
    None = 'NONE',
}

export enum CommentCannotUpdateReason {
    Archived = 'ARCHIVED',
    InsufficientAccess = 'INSUFFICIENT_ACCESS',
    Locked = 'LOCKED',
    LoginRequired = 'LOGIN_REQUIRED',
    Maintenance = 'MAINTENANCE',
    VerifiedEmailRequired = 'VERIFIED_EMAIL_REQUIRED',
    Denied = 'DENIED',
}

export type ICommentDeletedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type ICommit = INode &
    IGitObject &
    ISubscribable &
    IUniformResourceLocatable & {
        abbreviatedOid: Scalars['String'];
        additions: Scalars['Int'];
        associatedPullRequests: Maybe<IPullRequestConnection>;
        author: Maybe<IGitActor>;
        authoredByCommitter: Scalars['Boolean'];
        authoredDate: Scalars['DateTime'];
        blame: IBlame;
        changedFiles: Scalars['Int'];
        comments: ICommitCommentConnection;
        commitResourcePath: Scalars['URI'];
        commitUrl: Scalars['URI'];
        committedDate: Scalars['DateTime'];
        committedViaWeb: Scalars['Boolean'];
        committer: Maybe<IGitActor>;
        deletions: Scalars['Int'];
        deployments: Maybe<IDeploymentConnection>;
        history: ICommitHistoryConnection;
        id: Scalars['ID'];
        message: Scalars['String'];
        messageBody: Scalars['String'];
        messageBodyHTML: Scalars['HTML'];
        messageHeadline: Scalars['String'];
        messageHeadlineHTML: Scalars['HTML'];
        oid: Scalars['GitObjectID'];
        parents: ICommitConnection;
        pushedDate: Maybe<Scalars['DateTime']>;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        signature: Maybe<IGitSignature>;
        status: Maybe<IStatus>;
        tarballUrl: Scalars['URI'];
        tree: ITree;
        treeResourcePath: Scalars['URI'];
        treeUrl: Scalars['URI'];
        url: Scalars['URI'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerSubscription: Maybe<SubscriptionState>;
        zipballUrl: Scalars['URI'];
    };

export type ICommitAssociatedPullRequestsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IPullRequestOrder>;
};

export type ICommitBlameArgs = {
    path: Scalars['String'];
};

export type ICommitCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ICommitDeploymentsArgs = {
    environments: Maybe<Array<Scalars['String']>>;
    orderBy?: Maybe<IDeploymentOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ICommitHistoryArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    path: Maybe<Scalars['String']>;
    author: Maybe<ICommitAuthor>;
    since: Maybe<Scalars['GitTimestamp']>;
    until: Maybe<Scalars['GitTimestamp']>;
};

export type ICommitParentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ICommitAuthor = {
    id: Maybe<Scalars['ID']>;
    emails: Maybe<Array<Scalars['String']>>;
};

export type ICommitComment = INode &
    IComment &
    IDeletable &
    IUpdatable &
    IUpdatableComment &
    IReactable &
    IRepositoryNode & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        commit: Maybe<ICommit>;
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isMinimized: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        minimizedReason: Maybe<Scalars['String']>;
        path: Maybe<Scalars['String']>;
        position: Maybe<Scalars['Int']>;
        publishedAt: Maybe<Scalars['DateTime']>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanMinimize: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type ICommitCommentReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type ICommitCommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ICommitCommentConnection = {
    edges: Maybe<Array<Maybe<ICommitCommentEdge>>>;
    nodes: Maybe<Array<Maybe<ICommitComment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICommitCommentEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICommitComment>;
};

export type ICommitCommentThread = INode &
    IRepositoryNode & {
        comments: ICommitCommentConnection;
        commit: Maybe<ICommit>;
        id: Scalars['ID'];
        path: Maybe<Scalars['String']>;
        position: Maybe<Scalars['Int']>;
        repository: IRepository;
    };

export type ICommitCommentThreadCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ICommitConnection = {
    edges: Maybe<Array<Maybe<ICommitEdge>>>;
    nodes: Maybe<Array<Maybe<ICommit>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICommitContributionOrder = {
    field: CommitContributionOrderField;
    direction: OrderDirection;
};

export enum CommitContributionOrderField {
    OccurredAt = 'OCCURRED_AT',
    CommitCount = 'COMMIT_COUNT',
}

export type ICommitContributionsByRepository = {
    contributions: ICreatedCommitContributionConnection;
    repository: IRepository;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
};

export type ICommitContributionsByRepositoryContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<ICommitContributionOrder>;
};

export type ICommitEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICommit>;
};

export type ICommitHistoryConnection = {
    edges: Maybe<Array<Maybe<ICommitEdge>>>;
    nodes: Maybe<Array<Maybe<ICommit>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IContentAttachment = {
    body: Scalars['String'];
    contentReference: IContentReference;
    databaseId: Scalars['Int'];
    id: Scalars['ID'];
    title: Scalars['String'];
};

export type IContentReference = {
    databaseId: Scalars['Int'];
    id: Scalars['ID'];
    reference: Scalars['String'];
};

export type IContribution = {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type IContributionCalendar = {
    colors: Array<Scalars['String']>;
    isHalloween: Scalars['Boolean'];
    months: Array<IContributionCalendarMonth>;
    totalContributions: Scalars['Int'];
    weeks: Array<IContributionCalendarWeek>;
};

export type IContributionCalendarDay = {
    color: Scalars['String'];
    contributionCount: Scalars['Int'];
    date: Scalars['Date'];
    weekday: Scalars['Int'];
};

export type IContributionCalendarMonth = {
    firstDay: Scalars['Date'];
    name: Scalars['String'];
    totalWeeks: Scalars['Int'];
    year: Scalars['Int'];
};

export type IContributionCalendarWeek = {
    contributionDays: Array<IContributionCalendarDay>;
    firstDay: Scalars['Date'];
};

export type IContributionOrder = {
    field: Maybe<ContributionOrderField>;
    direction: OrderDirection;
};

export enum ContributionOrderField {
    OccurredAt = 'OCCURRED_AT',
}

export type IContributionsCollection = {
    commitContributionsByRepository: Array<ICommitContributionsByRepository>;
    contributionCalendar: IContributionCalendar;
    contributionYears: Array<Scalars['Int']>;
    doesEndInCurrentMonth: Scalars['Boolean'];
    earliestRestrictedContributionDate: Maybe<Scalars['Date']>;
    endedAt: Scalars['DateTime'];
    firstIssueContribution: Maybe<ICreatedIssueOrRestrictedContribution>;
    firstPullRequestContribution: Maybe<ICreatedPullRequestOrRestrictedContribution>;
    firstRepositoryContribution: Maybe<ICreatedRepositoryOrRestrictedContribution>;
    hasActivityInThePast: Scalars['Boolean'];
    hasAnyContributions: Scalars['Boolean'];
    hasAnyRestrictedContributions: Scalars['Boolean'];
    isSingleDay: Scalars['Boolean'];
    issueContributions: ICreatedIssueContributionConnection;
    issueContributionsByRepository: Array<IIssueContributionsByRepository>;
    joinedGitHubContribution: Maybe<IJoinedGitHubContribution>;
    latestRestrictedContributionDate: Maybe<Scalars['Date']>;
    mostRecentCollectionWithActivity: Maybe<IContributionsCollection>;
    mostRecentCollectionWithoutActivity: Maybe<IContributionsCollection>;
    popularIssueContribution: Maybe<ICreatedIssueContribution>;
    popularPullRequestContribution: Maybe<ICreatedPullRequestContribution>;
    pullRequestContributions: ICreatedPullRequestContributionConnection;
    pullRequestContributionsByRepository: Array<IPullRequestContributionsByRepository>;
    pullRequestReviewContributions: ICreatedPullRequestReviewContributionConnection;
    pullRequestReviewContributionsByRepository: Array<IPullRequestReviewContributionsByRepository>;
    repositoryContributions: ICreatedRepositoryContributionConnection;
    restrictedContributionsCount: Scalars['Int'];
    startedAt: Scalars['DateTime'];
    totalCommitContributions: Scalars['Int'];
    totalIssueContributions: Scalars['Int'];
    totalPullRequestContributions: Scalars['Int'];
    totalPullRequestReviewContributions: Scalars['Int'];
    totalRepositoriesWithContributedCommits: Scalars['Int'];
    totalRepositoriesWithContributedIssues: Scalars['Int'];
    totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
    totalRepositoriesWithContributedPullRequests: Scalars['Int'];
    totalRepositoryContributions: Scalars['Int'];
    user: IUser;
};

export type IContributionsCollectionCommitContributionsByRepositoryArgs = {
    maxRepositories?: Maybe<Scalars['Int']>;
};

export type IContributionsCollectionIssueContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IContributionsCollectionIssueContributionsByRepositoryArgs = {
    maxRepositories?: Maybe<Scalars['Int']>;
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionPullRequestContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IContributionsCollectionPullRequestContributionsByRepositoryArgs = {
    maxRepositories?: Maybe<Scalars['Int']>;
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionPullRequestReviewContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IContributionsCollectionPullRequestReviewContributionsByRepositoryArgs = {
    maxRepositories?: Maybe<Scalars['Int']>;
};

export type IContributionsCollectionRepositoryContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    excludeFirst?: Maybe<Scalars['Boolean']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IContributionsCollectionTotalIssueContributionsArgs = {
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionTotalPullRequestContributionsArgs = {
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionTotalRepositoriesWithContributedIssuesArgs = {
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionTotalRepositoriesWithContributedPullRequestsArgs = {
    excludeFirst?: Maybe<Scalars['Boolean']>;
    excludePopular?: Maybe<Scalars['Boolean']>;
};

export type IContributionsCollectionTotalRepositoryContributionsArgs = {
    excludeFirst?: Maybe<Scalars['Boolean']>;
};

export type IConvertedNoteToIssueEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type IConvertProjectCardNoteToIssueInput = {
    projectCardId: Scalars['ID'];
    repositoryId: Scalars['ID'];
    title: Maybe<Scalars['String']>;
    body: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IConvertProjectCardNoteToIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    projectCard: Maybe<IProjectCard>;
};

export type ICreateBranchProtectionRuleInput = {
    repositoryId: Scalars['ID'];
    pattern: Scalars['String'];
    requiresApprovingReviews: Maybe<Scalars['Boolean']>;
    requiredApprovingReviewCount: Maybe<Scalars['Int']>;
    requiresCommitSignatures: Maybe<Scalars['Boolean']>;
    isAdminEnforced: Maybe<Scalars['Boolean']>;
    requiresStatusChecks: Maybe<Scalars['Boolean']>;
    requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
    requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
    dismissesStaleReviews: Maybe<Scalars['Boolean']>;
    restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
    reviewDismissalActorIds: Maybe<Array<Scalars['ID']>>;
    restrictsPushes: Maybe<Scalars['Boolean']>;
    pushActorIds: Maybe<Array<Scalars['ID']>>;
    requiredStatusCheckContexts: Maybe<Array<Scalars['String']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateBranchProtectionRulePayload = {
    branchProtectionRule: Maybe<IBranchProtectionRule>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateContentAttachmentInput = {
    contentReferenceId: Scalars['ID'];
    title: Scalars['String'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreatedCommitContribution = IContribution & {
    commitCount: Scalars['Int'];
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    repository: IRepository;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ICreatedCommitContributionConnection = {
    edges: Maybe<Array<Maybe<ICreatedCommitContributionEdge>>>;
    nodes: Maybe<Array<Maybe<ICreatedCommitContribution>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICreatedCommitContributionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICreatedCommitContribution>;
};

export type ICreatedIssueContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    issue: IIssue;
    occurredAt: Scalars['DateTime'];
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ICreatedIssueContributionConnection = {
    edges: Maybe<Array<Maybe<ICreatedIssueContributionEdge>>>;
    nodes: Maybe<Array<Maybe<ICreatedIssueContribution>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICreatedIssueContributionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICreatedIssueContribution>;
};

export type ICreatedIssueOrRestrictedContribution = ICreatedIssueContribution | IRestrictedContribution;

export type ICreatedPullRequestContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    pullRequest: IPullRequest;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ICreatedPullRequestContributionConnection = {
    edges: Maybe<Array<Maybe<ICreatedPullRequestContributionEdge>>>;
    nodes: Maybe<Array<Maybe<ICreatedPullRequestContribution>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICreatedPullRequestContributionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICreatedPullRequestContribution>;
};

export type ICreatedPullRequestOrRestrictedContribution = ICreatedPullRequestContribution | IRestrictedContribution;

export type ICreatedPullRequestReviewContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    pullRequest: IPullRequest;
    pullRequestReview: IPullRequestReview;
    repository: IRepository;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ICreatedPullRequestReviewContributionConnection = {
    edges: Maybe<Array<Maybe<ICreatedPullRequestReviewContributionEdge>>>;
    nodes: Maybe<Array<Maybe<ICreatedPullRequestReviewContribution>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICreatedPullRequestReviewContributionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICreatedPullRequestReviewContribution>;
};

export type ICreatedRepositoryContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    repository: IRepository;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ICreatedRepositoryContributionConnection = {
    edges: Maybe<Array<Maybe<ICreatedRepositoryContributionEdge>>>;
    nodes: Maybe<Array<Maybe<ICreatedRepositoryContribution>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ICreatedRepositoryContributionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ICreatedRepositoryContribution>;
};

export type ICreatedRepositoryOrRestrictedContribution = ICreatedRepositoryContribution | IRestrictedContribution;

export type ICreateEnterpriseOrganizationInput = {
    enterpriseId: Scalars['ID'];
    login: Scalars['String'];
    profileName: Scalars['String'];
    billingEmail: Scalars['String'];
    adminLogins: Array<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateEnterpriseOrganizationPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    organization: Maybe<IOrganization>;
};

export type ICreateIssueInput = {
    repositoryId: Scalars['ID'];
    title: Scalars['String'];
    body: Maybe<Scalars['String']>;
    assigneeIds: Maybe<Array<Scalars['ID']>>;
    milestoneId: Maybe<Scalars['ID']>;
    labelIds: Maybe<Array<Scalars['ID']>>;
    projectIds: Maybe<Array<Scalars['ID']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    issue: Maybe<IIssue>;
};

export type ICreateProjectInput = {
    ownerId: Scalars['ID'];
    name: Scalars['String'];
    body: Maybe<Scalars['String']>;
    template: Maybe<ProjectTemplate>;
    repositoryIds: Maybe<Array<Scalars['ID']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    project: Maybe<IProject>;
};

export type ICreatePullRequestInput = {
    repositoryId: Scalars['ID'];
    baseRefName: Scalars['String'];
    headRefName: Scalars['String'];
    title: Scalars['String'];
    body: Maybe<Scalars['String']>;
    maintainerCanModify: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreatePullRequestPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
};

export type ICreateRefInput = {
    repositoryId: Scalars['ID'];
    name: Scalars['String'];
    oid: Scalars['GitObjectID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateRefPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    ref: Maybe<IRef>;
};

export type ICreateRepositoryInput = {
    name: Scalars['String'];
    ownerId: Maybe<Scalars['ID']>;
    description: Maybe<Scalars['String']>;
    visibility: RepositoryVisibility;
    template: Maybe<Scalars['Boolean']>;
    homepageUrl: Maybe<Scalars['URI']>;
    hasWikiEnabled: Maybe<Scalars['Boolean']>;
    hasIssuesEnabled: Maybe<Scalars['Boolean']>;
    teamId: Maybe<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateRepositoryPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type ICreateTeamDiscussionCommentInput = {
    discussionId: Scalars['ID'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateTeamDiscussionCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    teamDiscussionComment: Maybe<ITeamDiscussionComment>;
};

export type ICreateTeamDiscussionInput = {
    teamId: Scalars['ID'];
    title: Scalars['String'];
    body: Scalars['String'];
    private: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ICreateTeamDiscussionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    teamDiscussion: Maybe<ITeamDiscussion>;
};

export type ICrossReferencedEvent = INode &
    IUniformResourceLocatable & {
        actor: Maybe<IActor>;
        createdAt: Scalars['DateTime'];
        id: Scalars['ID'];
        isCrossRepository: Scalars['Boolean'];
        referencedAt: Scalars['DateTime'];
        resourcePath: Scalars['URI'];
        source: IReferencedSubject;
        target: IReferencedSubject;
        url: Scalars['URI'];
        willCloseTarget: Scalars['Boolean'];
    };

export type IDeclineTopicSuggestionInput = {
    repositoryId: Scalars['ID'];
    name: Scalars['String'];
    reason: TopicSuggestionDeclineReason;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeclineTopicSuggestionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    topic: Maybe<ITopic>;
};

export enum DefaultRepositoryPermissionField {
    None = 'NONE',
    Read = 'READ',
    Write = 'WRITE',
    Admin = 'ADMIN',
}

export type IDeletable = {
    viewerCanDelete: Scalars['Boolean'];
};

export type IDeleteBranchProtectionRuleInput = {
    branchProtectionRuleId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteBranchProtectionRulePayload = {
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteIssueCommentInput = {
    id: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteIssueCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteIssueInput = {
    issueId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type IDeletePackageVersionInput = {
    packageVersionId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteProjectCardInput = {
    cardId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteProjectCardPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    column: Maybe<IProjectColumn>;
    deletedCardId: Maybe<Scalars['ID']>;
};

export type IDeleteProjectColumnInput = {
    columnId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteProjectColumnPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    deletedColumnId: Maybe<Scalars['ID']>;
    project: Maybe<IProject>;
};

export type IDeleteProjectInput = {
    projectId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    owner: Maybe<IProjectOwner>;
};

export type IDeletePullRequestReviewCommentInput = {
    id: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeletePullRequestReviewCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
};

export type IDeletePullRequestReviewInput = {
    pullRequestReviewId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeletePullRequestReviewPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
};

export type IDeleteRefInput = {
    refId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteRefPayload = {
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteTeamDiscussionCommentInput = {
    id: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteTeamDiscussionCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteTeamDiscussionInput = {
    id: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDeleteTeamDiscussionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDemilestonedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    milestoneTitle: Scalars['String'];
    subject: IMilestoneItem;
};

export type IDeployedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    deployment: IDeployment;
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    ref: Maybe<IRef>;
};

export type IDeployKey = INode & {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    key: Scalars['String'];
    readOnly: Scalars['Boolean'];
    title: Scalars['String'];
    verified: Scalars['Boolean'];
};

export type IDeployKeyConnection = {
    edges: Maybe<Array<Maybe<IDeployKeyEdge>>>;
    nodes: Maybe<Array<Maybe<IDeployKey>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IDeployKeyEdge = {
    cursor: Scalars['String'];
    node: Maybe<IDeployKey>;
};

export type IDeployment = INode & {
    commit: Maybe<ICommit>;
    commitOid: Scalars['String'];
    createdAt: Scalars['DateTime'];
    creator: Maybe<IActor>;
    databaseId: Maybe<Scalars['Int']>;
    description: Maybe<Scalars['String']>;
    environment: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    latestStatus: Maybe<IDeploymentStatus>;
    payload: Maybe<Scalars['String']>;
    ref: Maybe<IRef>;
    repository: IRepository;
    state: Maybe<DeploymentState>;
    statuses: Maybe<IDeploymentStatusConnection>;
    task: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
};

export type IDeploymentStatusesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IDeploymentConnection = {
    edges: Maybe<Array<Maybe<IDeploymentEdge>>>;
    nodes: Maybe<Array<Maybe<IDeployment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IDeploymentEdge = {
    cursor: Scalars['String'];
    node: Maybe<IDeployment>;
};

export type IDeploymentEnvironmentChangedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    deploymentStatus: IDeploymentStatus;
    id: Scalars['ID'];
    pullRequest: IPullRequest;
};

export type IDeploymentOrder = {
    field: DeploymentOrderField;
    direction: OrderDirection;
};

export enum DeploymentOrderField {
    CreatedAt = 'CREATED_AT',
}

export enum DeploymentState {
    Abandoned = 'ABANDONED',
    Active = 'ACTIVE',
    Destroyed = 'DESTROYED',
    Error = 'ERROR',
    Failure = 'FAILURE',
    Inactive = 'INACTIVE',
    Pending = 'PENDING',
    Queued = 'QUEUED',
    InProgress = 'IN_PROGRESS',
}

export type IDeploymentStatus = INode & {
    createdAt: Scalars['DateTime'];
    creator: Maybe<IActor>;
    deployment: IDeployment;
    description: Maybe<Scalars['String']>;
    environmentUrl: Maybe<Scalars['URI']>;
    id: Scalars['ID'];
    logUrl: Maybe<Scalars['URI']>;
    state: DeploymentStatusState;
    updatedAt: Scalars['DateTime'];
};

export type IDeploymentStatusConnection = {
    edges: Maybe<Array<Maybe<IDeploymentStatusEdge>>>;
    nodes: Maybe<Array<Maybe<IDeploymentStatus>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IDeploymentStatusEdge = {
    cursor: Scalars['String'];
    node: Maybe<IDeploymentStatus>;
};

export enum DeploymentStatusState {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Failure = 'FAILURE',
    Inactive = 'INACTIVE',
    Error = 'ERROR',
    Queued = 'QUEUED',
    InProgress = 'IN_PROGRESS',
}

export type IDismissPullRequestReviewInput = {
    pullRequestReviewId: Scalars['ID'];
    message: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IDismissPullRequestReviewPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
};

export type IDraftPullRequestReviewComment = {
    path: Scalars['String'];
    position: Scalars['Int'];
    body: Scalars['String'];
};

export type IEnterprise = INode & {
    avatarUrl: Scalars['URI'];
    billingInfo: Maybe<IEnterpriseBillingInfo>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    description: Maybe<Scalars['String']>;
    descriptionHTML: Scalars['HTML'];
    id: Scalars['ID'];
    location: Maybe<Scalars['String']>;
    members: IEnterpriseMemberConnection;
    name: Scalars['String'];
    organizations: IOrganizationConnection;
    ownerInfo: Maybe<IEnterpriseOwnerInfo>;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    userAccounts: IEnterpriseUserAccountConnection;
    viewerIsAdmin: Scalars['Boolean'];
    websiteUrl: Maybe<Scalars['URI']>;
};

export type IEnterpriseAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IEnterpriseMembersArgs = {
    organizationLogins: Maybe<Array<Scalars['String']>>;
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IEnterpriseMemberOrder>;
    role: Maybe<EnterpriseUserAccountMembershipRole>;
    deployment: Maybe<EnterpriseUserDeployment>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOrganizationsArgs = {
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IOrganizationOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseUserAccountsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseAdministratorConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseAdministratorEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseAdministratorEdge = {
    cursor: Scalars['String'];
    node: Maybe<IUser>;
    role: EnterpriseAdministratorRole;
};

export type IEnterpriseAdministratorInvitation = INode & {
    createdAt: Scalars['DateTime'];
    email: Maybe<Scalars['String']>;
    enterprise: IEnterprise;
    id: Scalars['ID'];
    invitee: Maybe<IUser>;
    inviter: Maybe<IUser>;
    role: EnterpriseAdministratorRole;
};

export type IEnterpriseAdministratorInvitationConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseAdministratorInvitationEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseAdministratorInvitation>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseAdministratorInvitationEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseAdministratorInvitation>;
};

export type IEnterpriseAdministratorInvitationOrder = {
    field: EnterpriseAdministratorInvitationOrderField;
    direction: OrderDirection;
};

export enum EnterpriseAdministratorInvitationOrderField {
    CreatedAt = 'CREATED_AT',
}

export enum EnterpriseAdministratorRole {
    Owner = 'OWNER',
    BillingManager = 'BILLING_MANAGER',
}

export type IEnterpriseAuditEntryData = {
    enterpriseResourcePath: Maybe<Scalars['URI']>;
    enterpriseSlug: Maybe<Scalars['String']>;
    enterpriseUrl: Maybe<Scalars['URI']>;
};

export type IEnterpriseBillingInfo = {
    allLicensableUsersCount: Scalars['Int'];
    assetPacks: Scalars['Int'];
    availableSeats: Scalars['Int'];
    bandwidthQuota: Scalars['Float'];
    bandwidthUsage: Scalars['Float'];
    bandwidthUsagePercentage: Scalars['Int'];
    seats: Scalars['Int'];
    storageQuota: Scalars['Float'];
    storageUsage: Scalars['Float'];
    storageUsagePercentage: Scalars['Int'];
    totalAvailableLicenses: Scalars['Int'];
    totalLicenses: Scalars['Int'];
};

export enum EnterpriseDefaultRepositoryPermissionSettingValue {
    NoPolicy = 'NO_POLICY',
    Admin = 'ADMIN',
    Write = 'WRITE',
    Read = 'READ',
    None = 'NONE',
}

export type IEnterpriseEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterprise>;
};

export enum EnterpriseEnabledDisabledSettingValue {
    Enabled = 'ENABLED',
    Disabled = 'DISABLED',
    NoPolicy = 'NO_POLICY',
}

export enum EnterpriseEnabledSettingValue {
    Enabled = 'ENABLED',
    NoPolicy = 'NO_POLICY',
}

export type IEnterpriseIdentityProvider = INode & {
    digestMethod: Maybe<SamlDigestAlgorithm>;
    enterprise: Maybe<IEnterprise>;
    externalIdentities: IExternalIdentityConnection;
    id: Scalars['ID'];
    idpCertificate: Maybe<Scalars['X509Certificate']>;
    issuer: Maybe<Scalars['String']>;
    recoveryCodes: Maybe<Array<Scalars['String']>>;
    signatureMethod: Maybe<SamlSignatureAlgorithm>;
    ssoUrl: Maybe<Scalars['URI']>;
};

export type IEnterpriseIdentityProviderExternalIdentitiesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseMember = IEnterpriseUserAccount | IUser;

export type IEnterpriseMemberConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseMemberEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseMember>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseMemberEdge = {
    cursor: Scalars['String'];
    isUnlicensed: Scalars['Boolean'];
    node: Maybe<IEnterpriseMember>;
};

export type IEnterpriseMemberOrder = {
    field: EnterpriseMemberOrderField;
    direction: OrderDirection;
};

export enum EnterpriseMemberOrderField {
    Login = 'LOGIN',
    CreatedAt = 'CREATED_AT',
}

export enum EnterpriseMembersCanCreateRepositoriesSettingValue {
    NoPolicy = 'NO_POLICY',
    All = 'ALL',
    Public = 'PUBLIC',
    Private = 'PRIVATE',
    Disabled = 'DISABLED',
}

export enum EnterpriseMembersCanMakePurchasesSettingValue {
    Enabled = 'ENABLED',
    Disabled = 'DISABLED',
}

export enum EnterpriseMembershipType {
    All = 'ALL',
    Admin = 'ADMIN',
    BillingManager = 'BILLING_MANAGER',
    OrgMembership = 'ORG_MEMBERSHIP',
}

export type IEnterpriseOrder = {
    field: EnterpriseOrderField;
    direction: OrderDirection;
};

export enum EnterpriseOrderField {
    Name = 'NAME',
}

export type IEnterpriseOrganizationMembershipConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseOrganizationMembershipEdge>>>;
    nodes: Maybe<Array<Maybe<IOrganization>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseOrganizationMembershipEdge = {
    cursor: Scalars['String'];
    node: Maybe<IOrganization>;
    role: EnterpriseUserAccountMembershipRole;
};

export type IEnterpriseOutsideCollaboratorConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseOutsideCollaboratorEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseOutsideCollaboratorEdge = {
    cursor: Scalars['String'];
    isUnlicensed: Scalars['Boolean'];
    node: Maybe<IUser>;
    repositories: IEnterpriseRepositoryInfoConnection;
};

export type IEnterpriseOutsideCollaboratorEdgeRepositoriesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IRepositoryOrder>;
};

export type IEnterpriseOwnerInfo = {
    actionExecutionCapabilitySettingOrganizations: IOrganizationConnection;
    admins: IEnterpriseAdministratorConnection;
    affiliatedUsersWithTwoFactorDisabled: IUserConnection;
    affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
    allowPrivateRepositoryForkingSetting: EnterpriseEnabledDisabledSettingValue;
    allowPrivateRepositoryForkingSettingOrganizations: IOrganizationConnection;
    defaultRepositoryPermissionSetting: EnterpriseDefaultRepositoryPermissionSettingValue;
    defaultRepositoryPermissionSettingOrganizations: IOrganizationConnection;
    enterpriseServerInstallations: IEnterpriseServerInstallationConnection;
    isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
    isUpdatingTwoFactorRequirement: Scalars['Boolean'];
    membersCanChangeRepositoryVisibilitySetting: EnterpriseEnabledDisabledSettingValue;
    membersCanChangeRepositoryVisibilitySettingOrganizations: IOrganizationConnection;
    membersCanCreateInternalRepositoriesSetting: Maybe<Scalars['Boolean']>;
    membersCanCreatePrivateRepositoriesSetting: Maybe<Scalars['Boolean']>;
    membersCanCreatePublicRepositoriesSetting: Maybe<Scalars['Boolean']>;
    membersCanCreateRepositoriesSetting: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
    membersCanCreateRepositoriesSettingOrganizations: IOrganizationConnection;
    membersCanDeleteIssuesSetting: EnterpriseEnabledDisabledSettingValue;
    membersCanDeleteIssuesSettingOrganizations: IOrganizationConnection;
    membersCanDeleteRepositoriesSetting: EnterpriseEnabledDisabledSettingValue;
    membersCanDeleteRepositoriesSettingOrganizations: IOrganizationConnection;
    membersCanInviteCollaboratorsSetting: EnterpriseEnabledDisabledSettingValue;
    membersCanInviteCollaboratorsSettingOrganizations: IOrganizationConnection;
    membersCanMakePurchasesSetting: EnterpriseMembersCanMakePurchasesSettingValue;
    membersCanUpdateProtectedBranchesSetting: EnterpriseEnabledDisabledSettingValue;
    membersCanUpdateProtectedBranchesSettingOrganizations: IOrganizationConnection;
    membersCanViewDependencyInsightsSetting: EnterpriseEnabledDisabledSettingValue;
    membersCanViewDependencyInsightsSettingOrganizations: IOrganizationConnection;
    organizationProjectsSetting: EnterpriseEnabledDisabledSettingValue;
    organizationProjectsSettingOrganizations: IOrganizationConnection;
    outsideCollaborators: IEnterpriseOutsideCollaboratorConnection;
    pendingAdminInvitations: IEnterpriseAdministratorInvitationConnection;
    pendingCollaborators: IEnterprisePendingCollaboratorConnection;
    pendingMemberInvitations: IEnterprisePendingMemberInvitationConnection;
    repositoryProjectsSetting: EnterpriseEnabledDisabledSettingValue;
    repositoryProjectsSettingOrganizations: IOrganizationConnection;
    samlIdentityProvider: Maybe<IEnterpriseIdentityProvider>;
    samlIdentityProviderSettingOrganizations: IOrganizationConnection;
    teamDiscussionsSetting: EnterpriseEnabledDisabledSettingValue;
    teamDiscussionsSettingOrganizations: IOrganizationConnection;
    twoFactorRequiredSetting: EnterpriseEnabledSettingValue;
    twoFactorRequiredSettingOrganizations: IOrganizationConnection;
};

export type IEnterpriseOwnerInfoActionExecutionCapabilitySettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoAdminsArgs = {
    query: Maybe<Scalars['String']>;
    role: Maybe<EnterpriseAdministratorRole>;
    orderBy?: Maybe<IEnterpriseMemberOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoAffiliatedUsersWithTwoFactorDisabledArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoAllowPrivateRepositoryForkingSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoDefaultRepositoryPermissionSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: DefaultRepositoryPermissionField;
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoEnterpriseServerInstallationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    connectedOnly?: Maybe<Scalars['Boolean']>;
    orderBy?: Maybe<IEnterpriseServerInstallationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanCreateRepositoriesSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: OrganizationMembersCanCreateRepositoriesSettingValue;
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanDeleteIssuesSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanDeleteRepositoriesSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanInviteCollaboratorsSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoMembersCanViewDependencyInsightsSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoOrganizationProjectsSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoOutsideCollaboratorsArgs = {
    login: Maybe<Scalars['String']>;
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IEnterpriseMemberOrder>;
    visibility: Maybe<RepositoryVisibility>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoPendingAdminInvitationsArgs = {
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IEnterpriseAdministratorInvitationOrder>;
    role: Maybe<EnterpriseAdministratorRole>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoPendingCollaboratorsArgs = {
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IRepositoryInvitationOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoPendingMemberInvitationsArgs = {
    query: Maybe<Scalars['String']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseOwnerInfoRepositoryProjectsSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoSamlIdentityProviderSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: IdentityProviderConfigurationState;
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoTeamDiscussionsSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterpriseOwnerInfoTwoFactorRequiredSettingOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    value: Scalars['Boolean'];
    orderBy?: Maybe<IOrganizationOrder>;
};

export type IEnterprisePendingCollaboratorConnection = {
    edges: Maybe<Array<Maybe<IEnterprisePendingCollaboratorEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterprisePendingCollaboratorEdge = {
    cursor: Scalars['String'];
    isUnlicensed: Scalars['Boolean'];
    node: Maybe<IUser>;
    repositories: IEnterpriseRepositoryInfoConnection;
};

export type IEnterprisePendingCollaboratorEdgeRepositoriesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IRepositoryOrder>;
};

export type IEnterprisePendingMemberInvitationConnection = {
    edges: Maybe<Array<Maybe<IEnterprisePendingMemberInvitationEdge>>>;
    nodes: Maybe<Array<Maybe<IOrganizationInvitation>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    totalUniqueUserCount: Scalars['Int'];
};

export type IEnterprisePendingMemberInvitationEdge = {
    cursor: Scalars['String'];
    isUnlicensed: Scalars['Boolean'];
    node: Maybe<IOrganizationInvitation>;
};

export type IEnterpriseRepositoryInfo = INode & {
    id: Scalars['ID'];
    isPrivate: Scalars['Boolean'];
    name: Scalars['String'];
    nameWithOwner: Scalars['String'];
};

export type IEnterpriseRepositoryInfoConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseRepositoryInfoEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseRepositoryInfo>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseRepositoryInfoEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseRepositoryInfo>;
};

export type IEnterpriseServerInstallation = INode & {
    createdAt: Scalars['DateTime'];
    customerName: Scalars['String'];
    hostName: Scalars['String'];
    id: Scalars['ID'];
    isConnected: Scalars['Boolean'];
    updatedAt: Scalars['DateTime'];
    userAccounts: IEnterpriseServerUserAccountConnection;
    userAccountsUploads: IEnterpriseServerUserAccountsUploadConnection;
};

export type IEnterpriseServerInstallationUserAccountsArgs = {
    orderBy?: Maybe<IEnterpriseServerUserAccountOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseServerInstallationUserAccountsUploadsArgs = {
    orderBy?: Maybe<IEnterpriseServerUserAccountsUploadOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseServerInstallationConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseServerInstallationEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseServerInstallation>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseServerInstallationEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseServerInstallation>;
};

export type IEnterpriseServerInstallationOrder = {
    field: EnterpriseServerInstallationOrderField;
    direction: OrderDirection;
};

export enum EnterpriseServerInstallationOrderField {
    HostName = 'HOST_NAME',
    CustomerName = 'CUSTOMER_NAME',
    CreatedAt = 'CREATED_AT',
}

export type IEnterpriseServerUserAccount = INode & {
    createdAt: Scalars['DateTime'];
    emails: IEnterpriseServerUserAccountEmailConnection;
    enterpriseServerInstallation: IEnterpriseServerInstallation;
    id: Scalars['ID'];
    isSiteAdmin: Scalars['Boolean'];
    login: Scalars['String'];
    profileName: Maybe<Scalars['String']>;
    remoteCreatedAt: Scalars['DateTime'];
    remoteUserId: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};

export type IEnterpriseServerUserAccountEmailsArgs = {
    orderBy?: Maybe<IEnterpriseServerUserAccountEmailOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseServerUserAccountConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseServerUserAccountEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseServerUserAccount>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseServerUserAccountEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseServerUserAccount>;
};

export type IEnterpriseServerUserAccountEmail = INode & {
    createdAt: Scalars['DateTime'];
    email: Scalars['String'];
    id: Scalars['ID'];
    isPrimary: Scalars['Boolean'];
    updatedAt: Scalars['DateTime'];
    userAccount: IEnterpriseServerUserAccount;
};

export type IEnterpriseServerUserAccountEmailConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseServerUserAccountEmailEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseServerUserAccountEmail>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseServerUserAccountEmailEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseServerUserAccountEmail>;
};

export type IEnterpriseServerUserAccountEmailOrder = {
    field: EnterpriseServerUserAccountEmailOrderField;
    direction: OrderDirection;
};

export enum EnterpriseServerUserAccountEmailOrderField {
    Email = 'EMAIL',
}

export type IEnterpriseServerUserAccountOrder = {
    field: EnterpriseServerUserAccountOrderField;
    direction: OrderDirection;
};

export enum EnterpriseServerUserAccountOrderField {
    Login = 'LOGIN',
    RemoteCreatedAt = 'REMOTE_CREATED_AT',
}

export type IEnterpriseServerUserAccountsUpload = INode & {
    createdAt: Scalars['DateTime'];
    enterprise: IEnterprise;
    enterpriseServerInstallation: IEnterpriseServerInstallation;
    id: Scalars['ID'];
    name: Scalars['String'];
    syncState: EnterpriseServerUserAccountsUploadSyncState;
    updatedAt: Scalars['DateTime'];
};

export type IEnterpriseServerUserAccountsUploadConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseServerUserAccountsUploadEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseServerUserAccountsUpload>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseServerUserAccountsUploadEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseServerUserAccountsUpload>;
};

export type IEnterpriseServerUserAccountsUploadOrder = {
    field: EnterpriseServerUserAccountsUploadOrderField;
    direction: OrderDirection;
};

export enum EnterpriseServerUserAccountsUploadOrderField {
    CreatedAt = 'CREATED_AT',
}

export enum EnterpriseServerUserAccountsUploadSyncState {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Failure = 'FAILURE',
}

export type IEnterpriseUserAccount = INode &
    IActor & {
        avatarUrl: Scalars['URI'];
        createdAt: Scalars['DateTime'];
        enterprise: IEnterprise;
        id: Scalars['ID'];
        login: Scalars['String'];
        name: Maybe<Scalars['String']>;
        organizations: IEnterpriseOrganizationMembershipConnection;
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        user: Maybe<IUser>;
    };

export type IEnterpriseUserAccountAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IEnterpriseUserAccountOrganizationsArgs = {
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IOrganizationOrder>;
    role: Maybe<EnterpriseUserAccountMembershipRole>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IEnterpriseUserAccountConnection = {
    edges: Maybe<Array<Maybe<IEnterpriseUserAccountEdge>>>;
    nodes: Maybe<Array<Maybe<IEnterpriseUserAccount>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IEnterpriseUserAccountEdge = {
    cursor: Scalars['String'];
    node: Maybe<IEnterpriseUserAccount>;
};

export enum EnterpriseUserAccountMembershipRole {
    Member = 'MEMBER',
    Owner = 'OWNER',
}

export enum EnterpriseUserDeployment {
    Cloud = 'CLOUD',
    Server = 'SERVER',
}

export type IExternalIdentity = INode & {
    guid: Scalars['String'];
    id: Scalars['ID'];
    organizationInvitation: Maybe<IOrganizationInvitation>;
    samlIdentity: Maybe<IExternalIdentitySamlAttributes>;
    scimIdentity: Maybe<IExternalIdentityScimAttributes>;
    user: Maybe<IUser>;
};

export type IExternalIdentityConnection = {
    edges: Maybe<Array<Maybe<IExternalIdentityEdge>>>;
    nodes: Maybe<Array<Maybe<IExternalIdentity>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IExternalIdentityEdge = {
    cursor: Scalars['String'];
    node: Maybe<IExternalIdentity>;
};

export type IExternalIdentitySamlAttributes = {
    nameId: Maybe<Scalars['String']>;
};

export type IExternalIdentityScimAttributes = {
    username: Maybe<Scalars['String']>;
};

export type IFollowerConnection = {
    edges: Maybe<Array<Maybe<IUserEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IFollowingConnection = {
    edges: Maybe<Array<Maybe<IUserEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IFollowUserInput = {
    userId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IFollowUserPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    user: Maybe<IUser>;
};

export type IFundingLink = {
    platform: FundingPlatform;
    url: Scalars['URI'];
};

export enum FundingPlatform {
    Github = 'GITHUB',
    Patreon = 'PATREON',
    OpenCollective = 'OPEN_COLLECTIVE',
    KoFi = 'KO_FI',
    Tidelift = 'TIDELIFT',
    CommunityBridge = 'COMMUNITY_BRIDGE',
    Liberapay = 'LIBERAPAY',
    Issuehunt = 'ISSUEHUNT',
    Otechie = 'OTECHIE',
    Custom = 'CUSTOM',
}

export type IGenericHovercardContext = IHovercardContext & {
    message: Scalars['String'];
    octicon: Scalars['String'];
};

export type IGist = INode &
    IStarrable &
    IUniformResourceLocatable & {
        comments: IGistCommentConnection;
        createdAt: Scalars['DateTime'];
        description: Maybe<Scalars['String']>;
        files: Maybe<Array<Maybe<IGistFile>>>;
        forks: IGistConnection;
        id: Scalars['ID'];
        isFork: Scalars['Boolean'];
        isPublic: Scalars['Boolean'];
        name: Scalars['String'];
        owner: Maybe<IRepositoryOwner>;
        pushedAt: Maybe<Scalars['DateTime']>;
        resourcePath: Scalars['URI'];
        stargazers: IStargazerConnection;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        viewerHasStarred: Scalars['Boolean'];
    };

export type IGistCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IGistFilesArgs = {
    limit?: Maybe<Scalars['Int']>;
    oid: Maybe<Scalars['GitObjectID']>;
};

export type IGistForksArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IGistOrder>;
};

export type IGistStargazersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IStarOrder>;
};

export type IGistComment = INode &
    IComment &
    IDeletable &
    IUpdatable &
    IUpdatableComment & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        gist: IGist;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isMinimized: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        minimizedReason: Maybe<Scalars['String']>;
        publishedAt: Maybe<Scalars['DateTime']>;
        updatedAt: Scalars['DateTime'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanMinimize: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type IGistCommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IGistCommentConnection = {
    edges: Maybe<Array<Maybe<IGistCommentEdge>>>;
    nodes: Maybe<Array<Maybe<IGistComment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IGistCommentEdge = {
    cursor: Scalars['String'];
    node: Maybe<IGistComment>;
};

export type IGistConnection = {
    edges: Maybe<Array<Maybe<IGistEdge>>>;
    nodes: Maybe<Array<Maybe<IGist>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IGistEdge = {
    cursor: Scalars['String'];
    node: Maybe<IGist>;
};

export type IGistFile = {
    encodedName: Maybe<Scalars['String']>;
    encoding: Maybe<Scalars['String']>;
    extension: Maybe<Scalars['String']>;
    isImage: Scalars['Boolean'];
    isTruncated: Scalars['Boolean'];
    language: Maybe<ILanguage>;
    name: Maybe<Scalars['String']>;
    size: Maybe<Scalars['Int']>;
    text: Maybe<Scalars['String']>;
};

export type IGistFileTextArgs = {
    truncate: Maybe<Scalars['Int']>;
};

export type IGistOrder = {
    field: GistOrderField;
    direction: OrderDirection;
};

export enum GistOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    PushedAt = 'PUSHED_AT',
}

export enum GistPrivacy {
    Public = 'PUBLIC',
    Secret = 'SECRET',
    All = 'ALL',
}

export type IGitActor = {
    avatarUrl: Scalars['URI'];
    date: Maybe<Scalars['GitTimestamp']>;
    email: Maybe<Scalars['String']>;
    name: Maybe<Scalars['String']>;
    user: Maybe<IUser>;
};

export type IGitActorAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IGitHubMetadata = {
    gitHubServicesSha: Scalars['GitObjectID'];
    gitIpAddresses: Maybe<Array<Scalars['String']>>;
    hookIpAddresses: Maybe<Array<Scalars['String']>>;
    importerIpAddresses: Maybe<Array<Scalars['String']>>;
    isPasswordAuthenticationVerifiable: Scalars['Boolean'];
    pagesIpAddresses: Maybe<Array<Scalars['String']>>;
};

export type IGitObject = {
    abbreviatedOid: Scalars['String'];
    commitResourcePath: Scalars['URI'];
    commitUrl: Scalars['URI'];
    id: Scalars['ID'];
    oid: Scalars['GitObjectID'];
    repository: IRepository;
};

export type IGitSignature = {
    email: Scalars['String'];
    isValid: Scalars['Boolean'];
    payload: Scalars['String'];
    signature: Scalars['String'];
    signer: Maybe<IUser>;
    state: GitSignatureState;
    wasSignedByGitHub: Scalars['Boolean'];
};

export enum GitSignatureState {
    Valid = 'VALID',
    Invalid = 'INVALID',
    MalformedSig = 'MALFORMED_SIG',
    UnknownKey = 'UNKNOWN_KEY',
    BadEmail = 'BAD_EMAIL',
    UnverifiedEmail = 'UNVERIFIED_EMAIL',
    NoUser = 'NO_USER',
    UnknownSigType = 'UNKNOWN_SIG_TYPE',
    Unsigned = 'UNSIGNED',
    GpgverifyUnavailable = 'GPGVERIFY_UNAVAILABLE',
    GpgverifyError = 'GPGVERIFY_ERROR',
    NotSigningKey = 'NOT_SIGNING_KEY',
    ExpiredKey = 'EXPIRED_KEY',
    OcspPending = 'OCSP_PENDING',
    OcspError = 'OCSP_ERROR',
    BadCert = 'BAD_CERT',
    OcspRevoked = 'OCSP_REVOKED',
}

export type IGpgSignature = IGitSignature & {
    email: Scalars['String'];
    isValid: Scalars['Boolean'];
    keyId: Maybe<Scalars['String']>;
    payload: Scalars['String'];
    signature: Scalars['String'];
    signer: Maybe<IUser>;
    state: GitSignatureState;
    wasSignedByGitHub: Scalars['Boolean'];
};

export type IHeadRefDeletedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    headRef: Maybe<IRef>;
    headRefName: Scalars['String'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
};

export type IHeadRefForcePushedEvent = INode & {
    actor: Maybe<IActor>;
    afterCommit: Maybe<ICommit>;
    beforeCommit: Maybe<ICommit>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    ref: Maybe<IRef>;
};

export type IHeadRefRestoredEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
};

export type IHovercard = {
    contexts: Array<IHovercardContext>;
};

export type IHovercardContext = {
    message: Scalars['String'];
    octicon: Scalars['String'];
};

export enum IdentityProviderConfigurationState {
    Enforced = 'ENFORCED',
    Configured = 'CONFIGURED',
    Unconfigured = 'UNCONFIGURED',
}

export type IImportProjectInput = {
    ownerName: Scalars['String'];
    name: Scalars['String'];
    body: Maybe<Scalars['String']>;
    public: Maybe<Scalars['Boolean']>;
    columnImports: Array<IProjectColumnImport>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IInviteEnterpriseAdminInput = {
    enterpriseId: Scalars['ID'];
    invitee: Maybe<Scalars['String']>;
    email: Maybe<Scalars['String']>;
    role: Maybe<EnterpriseAdministratorRole>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IInviteEnterpriseAdminPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    invitation: Maybe<IEnterpriseAdministratorInvitation>;
};

export type IIssue = INode &
    IAssignable &
    IClosable &
    IComment &
    IUpdatable &
    IUpdatableComment &
    ILabelable &
    ILockable &
    IReactable &
    IRepositoryNode &
    ISubscribable &
    IUniformResourceLocatable & {
        activeLockReason: Maybe<LockReason>;
        assignees: IUserConnection;
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        closed: Scalars['Boolean'];
        closedAt: Maybe<Scalars['DateTime']>;
        comments: IIssueCommentConnection;
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        hovercard: IHovercard;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        labels: Maybe<ILabelConnection>;
        lastEditedAt: Maybe<Scalars['DateTime']>;
        locked: Scalars['Boolean'];
        milestone: Maybe<IMilestone>;
        number: Scalars['Int'];
        participants: IUserConnection;
        projectCards: IProjectCardConnection;
        publishedAt: Maybe<Scalars['DateTime']>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        state: IssueState;
        timeline: IIssueTimelineConnection;
        timelineItems: IIssueTimelineItemsConnection;
        title: Scalars['String'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanReact: Scalars['Boolean'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
        viewerSubscription: Maybe<SubscriptionState>;
    };

export type IIssueAssigneesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueHovercardArgs = {
    includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};

export type IIssueLabelsArgs = {
    orderBy?: Maybe<ILabelOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueParticipantsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueProjectCardsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type IIssueReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IIssueTimelineArgs = {
    since: Maybe<Scalars['DateTime']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueTimelineItemsArgs = {
    since: Maybe<Scalars['DateTime']>;
    skip: Maybe<Scalars['Int']>;
    itemTypes: Maybe<Array<IssueTimelineItemsItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueComment = INode &
    IComment &
    IDeletable &
    IUpdatable &
    IUpdatableComment &
    IReactable &
    IRepositoryNode & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isMinimized: Scalars['Boolean'];
        issue: IIssue;
        lastEditedAt: Maybe<Scalars['DateTime']>;
        minimizedReason: Maybe<Scalars['String']>;
        publishedAt: Maybe<Scalars['DateTime']>;
        pullRequest: Maybe<IPullRequest>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanMinimize: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type IIssueCommentReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IIssueCommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IIssueCommentConnection = {
    edges: Maybe<Array<Maybe<IIssueCommentEdge>>>;
    nodes: Maybe<Array<Maybe<IIssueComment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IIssueCommentEdge = {
    cursor: Scalars['String'];
    node: Maybe<IIssueComment>;
};

export type IIssueConnection = {
    edges: Maybe<Array<Maybe<IIssueEdge>>>;
    nodes: Maybe<Array<Maybe<IIssue>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IIssueContributionsByRepository = {
    contributions: ICreatedIssueContributionConnection;
    repository: IRepository;
};

export type IIssueContributionsByRepositoryContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IIssueEdge = {
    cursor: Scalars['String'];
    node: Maybe<IIssue>;
};

export type IIssueFilters = {
    assignee: Maybe<Scalars['String']>;
    createdBy: Maybe<Scalars['String']>;
    labels: Maybe<Array<Scalars['String']>>;
    mentioned: Maybe<Scalars['String']>;
    milestone: Maybe<Scalars['String']>;
    since: Maybe<Scalars['DateTime']>;
    states: Maybe<Array<IssueState>>;
    viewerSubscribed: Maybe<Scalars['Boolean']>;
};

export type IIssueOrder = {
    field: IssueOrderField;
    direction: OrderDirection;
};

export enum IssueOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    Comments = 'COMMENTS',
}

export type IIssueOrPullRequest = IIssue | IPullRequest;

export type IIssueOrPullRequestEdge = {
    cursor: Scalars['String'];
    node: Maybe<IIssueOrPullRequest>;
};

export enum IssuePubSubTopic {
    Updated = 'UPDATED',
    Markasread = 'MARKASREAD',
    Timeline = 'TIMELINE',
    State = 'STATE',
}

export enum IssueState {
    Open = 'OPEN',
    Closed = 'CLOSED',
}

export type IIssueTimelineConnection = {
    edges: Maybe<Array<Maybe<IIssueTimelineItemEdge>>>;
    nodes: Maybe<Array<Maybe<IIssueTimelineItem>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IIssueTimelineItem =
    | IAssignedEvent
    | IClosedEvent
    | ICommit
    | ICrossReferencedEvent
    | IDemilestonedEvent
    | IIssueComment
    | ILabeledEvent
    | ILockedEvent
    | IMilestonedEvent
    | IReferencedEvent
    | IRenamedTitleEvent
    | IReopenedEvent
    | ISubscribedEvent
    | ITransferredEvent
    | IUnassignedEvent
    | IUnlabeledEvent
    | IUnlockedEvent
    | IUnsubscribedEvent
    | IUserBlockedEvent;

export type IIssueTimelineItemEdge = {
    cursor: Scalars['String'];
    node: Maybe<IIssueTimelineItem>;
};

export type IIssueTimelineItems =
    | IAddedToProjectEvent
    | IAssignedEvent
    | IClosedEvent
    | ICommentDeletedEvent
    | IConvertedNoteToIssueEvent
    | ICrossReferencedEvent
    | IDemilestonedEvent
    | IIssueComment
    | ILabeledEvent
    | ILockedEvent
    | IMarkedAsDuplicateEvent
    | IMentionedEvent
    | IMilestonedEvent
    | IMovedColumnsInProjectEvent
    | IPinnedEvent
    | IReferencedEvent
    | IRemovedFromProjectEvent
    | IRenamedTitleEvent
    | IReopenedEvent
    | ISubscribedEvent
    | ITransferredEvent
    | IUnassignedEvent
    | IUnlabeledEvent
    | IUnlockedEvent
    | IUnpinnedEvent
    | IUnsubscribedEvent
    | IUserBlockedEvent;

export type IIssueTimelineItemsConnection = {
    edges: Maybe<Array<Maybe<IIssueTimelineItemsEdge>>>;
    filteredCount: Scalars['Int'];
    nodes: Maybe<Array<Maybe<IIssueTimelineItems>>>;
    pageCount: Scalars['Int'];
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};

export type IIssueTimelineItemsEdge = {
    cursor: Scalars['String'];
    node: Maybe<IIssueTimelineItems>;
};

export enum IssueTimelineItemsItemType {
    IssueComment = 'ISSUE_COMMENT',
    CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
    AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
    AssignedEvent = 'ASSIGNED_EVENT',
    ClosedEvent = 'CLOSED_EVENT',
    CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
    ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
    DemilestonedEvent = 'DEMILESTONED_EVENT',
    LabeledEvent = 'LABELED_EVENT',
    LockedEvent = 'LOCKED_EVENT',
    MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
    MentionedEvent = 'MENTIONED_EVENT',
    MilestonedEvent = 'MILESTONED_EVENT',
    MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
    PinnedEvent = 'PINNED_EVENT',
    ReferencedEvent = 'REFERENCED_EVENT',
    RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
    RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
    ReopenedEvent = 'REOPENED_EVENT',
    SubscribedEvent = 'SUBSCRIBED_EVENT',
    TransferredEvent = 'TRANSFERRED_EVENT',
    UnassignedEvent = 'UNASSIGNED_EVENT',
    UnlabeledEvent = 'UNLABELED_EVENT',
    UnlockedEvent = 'UNLOCKED_EVENT',
    UserBlockedEvent = 'USER_BLOCKED_EVENT',
    UnpinnedEvent = 'UNPINNED_EVENT',
    UnsubscribedEvent = 'UNSUBSCRIBED_EVENT',
}

export type IJoinedGitHubContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type ILabel = INode & {
    color: Scalars['String'];
    createdAt: Maybe<Scalars['DateTime']>;
    description: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    isDefault: Scalars['Boolean'];
    issues: IIssueConnection;
    name: Scalars['String'];
    pullRequests: IPullRequestConnection;
    repository: IRepository;
    resourcePath: Scalars['URI'];
    updatedAt: Maybe<Scalars['DateTime']>;
    url: Scalars['URI'];
};

export type ILabelIssuesArgs = {
    orderBy: Maybe<IIssueOrder>;
    labels: Maybe<Array<Scalars['String']>>;
    states: Maybe<Array<IssueState>>;
    filterBy: Maybe<IIssueFilters>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ILabelPullRequestsArgs = {
    states: Maybe<Array<PullRequestState>>;
    labels: Maybe<Array<Scalars['String']>>;
    headRefName: Maybe<Scalars['String']>;
    baseRefName: Maybe<Scalars['String']>;
    orderBy: Maybe<IIssueOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ILabelable = {
    labels: Maybe<ILabelConnection>;
};

export type ILabelableLabelsArgs = {
    orderBy?: Maybe<ILabelOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ILabelConnection = {
    edges: Maybe<Array<Maybe<ILabelEdge>>>;
    nodes: Maybe<Array<Maybe<ILabel>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ILabeledEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    label: ILabel;
    labelable: ILabelable;
};

export type ILabelEdge = {
    cursor: Scalars['String'];
    node: Maybe<ILabel>;
};

export type ILabelOrder = {
    field: LabelOrderField;
    direction: OrderDirection;
};

export enum LabelOrderField {
    Name = 'NAME',
    CreatedAt = 'CREATED_AT',
}

export type ILanguage = INode & {
    color: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ILanguageConnection = {
    edges: Maybe<Array<Maybe<ILanguageEdge>>>;
    nodes: Maybe<Array<Maybe<ILanguage>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    totalSize: Scalars['Int'];
};

export type ILanguageEdge = {
    cursor: Scalars['String'];
    node: ILanguage;
    size: Scalars['Int'];
};

export type ILanguageOrder = {
    field: LanguageOrderField;
    direction: OrderDirection;
};

export enum LanguageOrderField {
    Size = 'SIZE',
}

export type ILicense = INode & {
    body: Scalars['String'];
    conditions: Array<Maybe<ILicenseRule>>;
    description: Maybe<Scalars['String']>;
    featured: Scalars['Boolean'];
    hidden: Scalars['Boolean'];
    id: Scalars['ID'];
    implementation: Maybe<Scalars['String']>;
    key: Scalars['String'];
    limitations: Array<Maybe<ILicenseRule>>;
    name: Scalars['String'];
    nickname: Maybe<Scalars['String']>;
    permissions: Array<Maybe<ILicenseRule>>;
    pseudoLicense: Scalars['Boolean'];
    spdxId: Maybe<Scalars['String']>;
    url: Maybe<Scalars['URI']>;
};

export type ILicenseRule = {
    description: Scalars['String'];
    key: Scalars['String'];
    label: Scalars['String'];
};

export type ILinkRepositoryToProjectInput = {
    projectId: Scalars['ID'];
    repositoryId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ILinkRepositoryToProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    project: Maybe<IProject>;
    repository: Maybe<IRepository>;
};

export type ILockable = {
    activeLockReason: Maybe<LockReason>;
    locked: Scalars['Boolean'];
};

export type ILockedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    lockReason: Maybe<LockReason>;
    lockable: ILockable;
};

export type ILockLockableInput = {
    lockableId: Scalars['ID'];
    lockReason: Maybe<LockReason>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ILockLockablePayload = {
    actor: Maybe<IActor>;
    clientMutationId: Maybe<Scalars['String']>;
    lockedRecord: Maybe<ILockable>;
};

export enum LockReason {
    OffTopic = 'OFF_TOPIC',
    TooHeated = 'TOO_HEATED',
    Resolved = 'RESOLVED',
    Spam = 'SPAM',
}

export type IMannequin = INode &
    IActor &
    IUniformResourceLocatable & {
        avatarUrl: Scalars['URI'];
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        email: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        login: Scalars['String'];
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
    };

export type IMannequinAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IMarkedAsDuplicateEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
};

export type IMarketplaceCategory = INode & {
    description: Maybe<Scalars['String']>;
    howItWorks: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    primaryListingCount: Scalars['Int'];
    resourcePath: Scalars['URI'];
    secondaryListingCount: Scalars['Int'];
    slug: Scalars['String'];
    url: Scalars['URI'];
};

export type IMarketplaceListing = INode & {
    app: Maybe<IApp>;
    companyUrl: Maybe<Scalars['URI']>;
    configurationResourcePath: Scalars['URI'];
    configurationUrl: Scalars['URI'];
    documentationUrl: Maybe<Scalars['URI']>;
    extendedDescription: Maybe<Scalars['String']>;
    extendedDescriptionHTML: Scalars['HTML'];
    fullDescription: Scalars['String'];
    fullDescriptionHTML: Scalars['HTML'];
    hasApprovalBeenRequested: Scalars['Boolean'];
    hasPublishedFreeTrialPlans: Scalars['Boolean'];
    hasTermsOfService: Scalars['Boolean'];
    howItWorks: Maybe<Scalars['String']>;
    howItWorksHTML: Scalars['HTML'];
    id: Scalars['ID'];
    installationUrl: Maybe<Scalars['URI']>;
    installedForViewer: Scalars['Boolean'];
    isApproved: Scalars['Boolean'];
    isArchived: Scalars['Boolean'];
    isDelisted: Scalars['Boolean'];
    isDraft: Scalars['Boolean'];
    isPaid: Scalars['Boolean'];
    isPublic: Scalars['Boolean'];
    isRejected: Scalars['Boolean'];
    isUnverified: Scalars['Boolean'];
    isUnverifiedPending: Scalars['Boolean'];
    isVerificationPendingFromDraft: Scalars['Boolean'];
    isVerificationPendingFromUnverified: Scalars['Boolean'];
    isVerified: Scalars['Boolean'];
    logoBackgroundColor: Scalars['String'];
    logoUrl: Maybe<Scalars['URI']>;
    name: Scalars['String'];
    normalizedShortDescription: Scalars['String'];
    pricingUrl: Maybe<Scalars['URI']>;
    primaryCategory: IMarketplaceCategory;
    privacyPolicyUrl: Scalars['URI'];
    resourcePath: Scalars['URI'];
    screenshotUrls: Array<Maybe<Scalars['String']>>;
    secondaryCategory: Maybe<IMarketplaceCategory>;
    shortDescription: Scalars['String'];
    slug: Scalars['String'];
    statusUrl: Maybe<Scalars['URI']>;
    supportEmail: Maybe<Scalars['String']>;
    supportUrl: Scalars['URI'];
    termsOfServiceUrl: Maybe<Scalars['URI']>;
    url: Scalars['URI'];
    viewerCanAddPlans: Scalars['Boolean'];
    viewerCanApprove: Scalars['Boolean'];
    viewerCanDelist: Scalars['Boolean'];
    viewerCanEdit: Scalars['Boolean'];
    viewerCanEditCategories: Scalars['Boolean'];
    viewerCanEditPlans: Scalars['Boolean'];
    viewerCanRedraft: Scalars['Boolean'];
    viewerCanReject: Scalars['Boolean'];
    viewerCanRequestApproval: Scalars['Boolean'];
    viewerHasPurchased: Scalars['Boolean'];
    viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
    viewerIsListingAdmin: Scalars['Boolean'];
};

export type IMarketplaceListingLogoUrlArgs = {
    size?: Maybe<Scalars['Int']>;
};

export type IMarketplaceListingConnection = {
    edges: Maybe<Array<Maybe<IMarketplaceListingEdge>>>;
    nodes: Maybe<Array<Maybe<IMarketplaceListing>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IMarketplaceListingEdge = {
    cursor: Scalars['String'];
    node: Maybe<IMarketplaceListing>;
};

export type IMembersCanDeleteReposClearAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IMembersCanDeleteReposDisableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IMembersCanDeleteReposEnableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IMemberStatusable = {
    memberStatuses: IUserStatusConnection;
};

export type IMemberStatusableMemberStatusesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IUserStatusOrder>;
};

export type IMentionedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export enum MergeableState {
    Mergeable = 'MERGEABLE',
    Conflicting = 'CONFLICTING',
    Unknown = 'UNKNOWN',
}

export type IMergeBranchInput = {
    repositoryId: Scalars['ID'];
    base: Scalars['String'];
    head: Scalars['String'];
    commitMessage: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMergeBranchPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    mergeCommit: Maybe<ICommit>;
};

export type IMergedEvent = INode &
    IUniformResourceLocatable & {
        actor: Maybe<IActor>;
        commit: Maybe<ICommit>;
        createdAt: Scalars['DateTime'];
        id: Scalars['ID'];
        mergeRef: Maybe<IRef>;
        mergeRefName: Scalars['String'];
        pullRequest: IPullRequest;
        resourcePath: Scalars['URI'];
        url: Scalars['URI'];
    };

export type IMergePullRequestInput = {
    pullRequestId: Scalars['ID'];
    commitHeadline: Maybe<Scalars['String']>;
    commitBody: Maybe<Scalars['String']>;
    expectedHeadOid: Maybe<Scalars['GitObjectID']>;
    mergeMethod: Maybe<PullRequestMergeMethod>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMergePullRequestPayload = {
    actor: Maybe<IActor>;
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
};

export type IMilestone = INode &
    IClosable &
    IUniformResourceLocatable & {
        closed: Scalars['Boolean'];
        closedAt: Maybe<Scalars['DateTime']>;
        createdAt: Scalars['DateTime'];
        creator: Maybe<IActor>;
        description: Maybe<Scalars['String']>;
        dueOn: Maybe<Scalars['DateTime']>;
        id: Scalars['ID'];
        issuePrioritiesDebug: Scalars['String'];
        issues: IIssueConnection;
        number: Scalars['Int'];
        pullRequests: IPullRequestConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        state: MilestoneState;
        title: Scalars['String'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
    };

export type IMilestoneIssuesArgs = {
    orderBy: Maybe<IIssueOrder>;
    labels: Maybe<Array<Scalars['String']>>;
    states: Maybe<Array<IssueState>>;
    filterBy: Maybe<IIssueFilters>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IMilestonePullRequestsArgs = {
    states: Maybe<Array<PullRequestState>>;
    labels: Maybe<Array<Scalars['String']>>;
    headRefName: Maybe<Scalars['String']>;
    baseRefName: Maybe<Scalars['String']>;
    orderBy: Maybe<IIssueOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IMilestoneConnection = {
    edges: Maybe<Array<Maybe<IMilestoneEdge>>>;
    nodes: Maybe<Array<Maybe<IMilestone>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IMilestonedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    milestoneTitle: Scalars['String'];
    subject: IMilestoneItem;
};

export type IMilestoneEdge = {
    cursor: Scalars['String'];
    node: Maybe<IMilestone>;
};

export type IMilestoneItem = IIssue | IPullRequest;

export type IMilestoneOrder = {
    field: MilestoneOrderField;
    direction: OrderDirection;
};

export enum MilestoneOrderField {
    DueDate = 'DUE_DATE',
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    Number = 'NUMBER',
}

export enum MilestoneState {
    Open = 'OPEN',
    Closed = 'CLOSED',
}

export type IMinimizeCommentInput = {
    subjectId: Scalars['ID'];
    classifier: ReportedContentClassifiers;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMovedColumnsInProjectEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type IMoveProjectCardInput = {
    cardId: Scalars['ID'];
    columnId: Scalars['ID'];
    afterCardId: Maybe<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMoveProjectCardPayload = {
    cardEdge: Maybe<IProjectCardEdge>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMoveProjectColumnInput = {
    columnId: Scalars['ID'];
    afterColumnId: Maybe<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IMoveProjectColumnPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    columnEdge: Maybe<IProjectColumnEdge>;
};

export type IMutation = {
    acceptEnterpriseAdministratorInvitation: Maybe<IAcceptEnterpriseAdministratorInvitationPayload>;
    acceptTopicSuggestion: Maybe<IAcceptTopicSuggestionPayload>;
    addAssigneesToAssignable: Maybe<IAddAssigneesToAssignablePayload>;
    addComment: Maybe<IAddCommentPayload>;
    addLabelsToLabelable: Maybe<IAddLabelsToLabelablePayload>;
    addProjectCard: Maybe<IAddProjectCardPayload>;
    addProjectColumn: Maybe<IAddProjectColumnPayload>;
    addPullRequestReview: Maybe<IAddPullRequestReviewPayload>;
    addPullRequestReviewComment: Maybe<IAddPullRequestReviewCommentPayload>;
    addReaction: Maybe<IAddReactionPayload>;
    addStar: Maybe<IAddStarPayload>;
    archiveRepository: Maybe<IArchiveRepositoryPayload>;
    cancelEnterpriseAdminInvitation: Maybe<ICancelEnterpriseAdminInvitationPayload>;
    changeUserStatus: Maybe<IChangeUserStatusPayload>;
    clearLabelsFromLabelable: Maybe<IClearLabelsFromLabelablePayload>;
    cloneProject: Maybe<ICloneProjectPayload>;
    cloneTemplateRepository: Maybe<ICloneTemplateRepositoryPayload>;
    closeIssue: Maybe<ICloseIssuePayload>;
    closePullRequest: Maybe<IClosePullRequestPayload>;
    convertProjectCardNoteToIssue: Maybe<IConvertProjectCardNoteToIssuePayload>;
    createBranchProtectionRule: Maybe<ICreateBranchProtectionRulePayload>;
    createEnterpriseOrganization: Maybe<ICreateEnterpriseOrganizationPayload>;
    createIssue: Maybe<ICreateIssuePayload>;
    createProject: Maybe<ICreateProjectPayload>;
    createPullRequest: Maybe<ICreatePullRequestPayload>;
    createRef: Maybe<ICreateRefPayload>;
    createRepository: Maybe<ICreateRepositoryPayload>;
    createTeamDiscussion: Maybe<ICreateTeamDiscussionPayload>;
    createTeamDiscussionComment: Maybe<ICreateTeamDiscussionCommentPayload>;
    declineTopicSuggestion: Maybe<IDeclineTopicSuggestionPayload>;
    deleteBranchProtectionRule: Maybe<IDeleteBranchProtectionRulePayload>;
    deleteIssue: Maybe<IDeleteIssuePayload>;
    deleteIssueComment: Maybe<IDeleteIssueCommentPayload>;
    deleteProject: Maybe<IDeleteProjectPayload>;
    deleteProjectCard: Maybe<IDeleteProjectCardPayload>;
    deleteProjectColumn: Maybe<IDeleteProjectColumnPayload>;
    deletePullRequestReview: Maybe<IDeletePullRequestReviewPayload>;
    deletePullRequestReviewComment: Maybe<IDeletePullRequestReviewCommentPayload>;
    deleteRef: Maybe<IDeleteRefPayload>;
    deleteTeamDiscussion: Maybe<IDeleteTeamDiscussionPayload>;
    deleteTeamDiscussionComment: Maybe<IDeleteTeamDiscussionCommentPayload>;
    dismissPullRequestReview: Maybe<IDismissPullRequestReviewPayload>;
    followUser: Maybe<IFollowUserPayload>;
    inviteEnterpriseAdmin: Maybe<IInviteEnterpriseAdminPayload>;
    linkRepositoryToProject: Maybe<ILinkRepositoryToProjectPayload>;
    lockLockable: Maybe<ILockLockablePayload>;
    mergeBranch: Maybe<IMergeBranchPayload>;
    mergePullRequest: Maybe<IMergePullRequestPayload>;
    moveProjectCard: Maybe<IMoveProjectCardPayload>;
    moveProjectColumn: Maybe<IMoveProjectColumnPayload>;
    regenerateEnterpriseIdentityProviderRecoveryCodes: Maybe<IRegenerateEnterpriseIdentityProviderRecoveryCodesPayload>;
    removeAssigneesFromAssignable: Maybe<IRemoveAssigneesFromAssignablePayload>;
    removeEnterpriseAdmin: Maybe<IRemoveEnterpriseAdminPayload>;
    removeEnterpriseOrganization: Maybe<IRemoveEnterpriseOrganizationPayload>;
    removeLabelsFromLabelable: Maybe<IRemoveLabelsFromLabelablePayload>;
    removeOutsideCollaborator: Maybe<IRemoveOutsideCollaboratorPayload>;
    removeReaction: Maybe<IRemoveReactionPayload>;
    removeStar: Maybe<IRemoveStarPayload>;
    reopenIssue: Maybe<IReopenIssuePayload>;
    reopenPullRequest: Maybe<IReopenPullRequestPayload>;
    requestReviews: Maybe<IRequestReviewsPayload>;
    resolveReviewThread: Maybe<IResolveReviewThreadPayload>;
    submitPullRequestReview: Maybe<ISubmitPullRequestReviewPayload>;
    transferIssue: Maybe<ITransferIssuePayload>;
    unarchiveRepository: Maybe<IUnarchiveRepositoryPayload>;
    unfollowUser: Maybe<IUnfollowUserPayload>;
    unlinkRepositoryFromProject: Maybe<IUnlinkRepositoryFromProjectPayload>;
    unlockLockable: Maybe<IUnlockLockablePayload>;
    unmarkIssueAsDuplicate: Maybe<IUnmarkIssueAsDuplicatePayload>;
    unresolveReviewThread: Maybe<IUnresolveReviewThreadPayload>;
    updateBranchProtectionRule: Maybe<IUpdateBranchProtectionRulePayload>;
    updateEnterpriseActionExecutionCapabilitySetting: Maybe<IUpdateEnterpriseActionExecutionCapabilitySettingPayload>;
    updateEnterpriseAdministratorRole: Maybe<IUpdateEnterpriseAdministratorRolePayload>;
    updateEnterpriseAllowPrivateRepositoryForkingSetting: Maybe<
        IUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload
    >;
    updateEnterpriseDefaultRepositoryPermissionSetting: Maybe<
        IUpdateEnterpriseDefaultRepositoryPermissionSettingPayload
    >;
    updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: Maybe<
        IUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload
    >;
    updateEnterpriseMembersCanCreateRepositoriesSetting: Maybe<
        IUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload
    >;
    updateEnterpriseMembersCanDeleteIssuesSetting: Maybe<IUpdateEnterpriseMembersCanDeleteIssuesSettingPayload>;
    updateEnterpriseMembersCanDeleteRepositoriesSetting: Maybe<
        IUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload
    >;
    updateEnterpriseMembersCanInviteCollaboratorsSetting: Maybe<
        IUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload
    >;
    updateEnterpriseMembersCanMakePurchasesSetting: Maybe<IUpdateEnterpriseMembersCanMakePurchasesSettingPayload>;
    updateEnterpriseMembersCanUpdateProtectedBranchesSetting: Maybe<
        IUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload
    >;
    updateEnterpriseMembersCanViewDependencyInsightsSetting: Maybe<
        IUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload
    >;
    updateEnterpriseOrganizationProjectsSetting: Maybe<IUpdateEnterpriseOrganizationProjectsSettingPayload>;
    updateEnterpriseProfile: Maybe<IUpdateEnterpriseProfilePayload>;
    updateEnterpriseRepositoryProjectsSetting: Maybe<IUpdateEnterpriseRepositoryProjectsSettingPayload>;
    updateEnterpriseTeamDiscussionsSetting: Maybe<IUpdateEnterpriseTeamDiscussionsSettingPayload>;
    updateEnterpriseTwoFactorAuthenticationRequiredSetting: Maybe<
        IUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload
    >;
    updateIssue: Maybe<IUpdateIssuePayload>;
    updateIssueComment: Maybe<IUpdateIssueCommentPayload>;
    updateProject: Maybe<IUpdateProjectPayload>;
    updateProjectCard: Maybe<IUpdateProjectCardPayload>;
    updateProjectColumn: Maybe<IUpdateProjectColumnPayload>;
    updatePullRequest: Maybe<IUpdatePullRequestPayload>;
    updatePullRequestReview: Maybe<IUpdatePullRequestReviewPayload>;
    updatePullRequestReviewComment: Maybe<IUpdatePullRequestReviewCommentPayload>;
    updateRef: Maybe<IUpdateRefPayload>;
    updateRepository: Maybe<IUpdateRepositoryPayload>;
    updateSubscription: Maybe<IUpdateSubscriptionPayload>;
    updateTeamDiscussion: Maybe<IUpdateTeamDiscussionPayload>;
    updateTeamDiscussionComment: Maybe<IUpdateTeamDiscussionCommentPayload>;
    updateTopics: Maybe<IUpdateTopicsPayload>;
};

export type IMutationAcceptEnterpriseAdministratorInvitationArgs = {
    input: IAcceptEnterpriseAdministratorInvitationInput;
};

export type IMutationAcceptTopicSuggestionArgs = {
    input: IAcceptTopicSuggestionInput;
};

export type IMutationAddAssigneesToAssignableArgs = {
    input: IAddAssigneesToAssignableInput;
};

export type IMutationAddCommentArgs = {
    input: IAddCommentInput;
};

export type IMutationAddLabelsToLabelableArgs = {
    input: IAddLabelsToLabelableInput;
};

export type IMutationAddProjectCardArgs = {
    input: IAddProjectCardInput;
};

export type IMutationAddProjectColumnArgs = {
    input: IAddProjectColumnInput;
};

export type IMutationAddPullRequestReviewArgs = {
    input: IAddPullRequestReviewInput;
};

export type IMutationAddPullRequestReviewCommentArgs = {
    input: IAddPullRequestReviewCommentInput;
};

export type IMutationAddReactionArgs = {
    input: IAddReactionInput;
};

export type IMutationAddStarArgs = {
    input: IAddStarInput;
};

export type IMutationArchiveRepositoryArgs = {
    input: IArchiveRepositoryInput;
};

export type IMutationCancelEnterpriseAdminInvitationArgs = {
    input: ICancelEnterpriseAdminInvitationInput;
};

export type IMutationChangeUserStatusArgs = {
    input: IChangeUserStatusInput;
};

export type IMutationClearLabelsFromLabelableArgs = {
    input: IClearLabelsFromLabelableInput;
};

export type IMutationCloneProjectArgs = {
    input: ICloneProjectInput;
};

export type IMutationCloneTemplateRepositoryArgs = {
    input: ICloneTemplateRepositoryInput;
};

export type IMutationCloseIssueArgs = {
    input: ICloseIssueInput;
};

export type IMutationClosePullRequestArgs = {
    input: IClosePullRequestInput;
};

export type IMutationConvertProjectCardNoteToIssueArgs = {
    input: IConvertProjectCardNoteToIssueInput;
};

export type IMutationCreateBranchProtectionRuleArgs = {
    input: ICreateBranchProtectionRuleInput;
};

export type IMutationCreateEnterpriseOrganizationArgs = {
    input: ICreateEnterpriseOrganizationInput;
};

export type IMutationCreateIssueArgs = {
    input: ICreateIssueInput;
};

export type IMutationCreateProjectArgs = {
    input: ICreateProjectInput;
};

export type IMutationCreatePullRequestArgs = {
    input: ICreatePullRequestInput;
};

export type IMutationCreateRefArgs = {
    input: ICreateRefInput;
};

export type IMutationCreateRepositoryArgs = {
    input: ICreateRepositoryInput;
};

export type IMutationCreateTeamDiscussionArgs = {
    input: ICreateTeamDiscussionInput;
};

export type IMutationCreateTeamDiscussionCommentArgs = {
    input: ICreateTeamDiscussionCommentInput;
};

export type IMutationDeclineTopicSuggestionArgs = {
    input: IDeclineTopicSuggestionInput;
};

export type IMutationDeleteBranchProtectionRuleArgs = {
    input: IDeleteBranchProtectionRuleInput;
};

export type IMutationDeleteIssueArgs = {
    input: IDeleteIssueInput;
};

export type IMutationDeleteIssueCommentArgs = {
    input: IDeleteIssueCommentInput;
};

export type IMutationDeleteProjectArgs = {
    input: IDeleteProjectInput;
};

export type IMutationDeleteProjectCardArgs = {
    input: IDeleteProjectCardInput;
};

export type IMutationDeleteProjectColumnArgs = {
    input: IDeleteProjectColumnInput;
};

export type IMutationDeletePullRequestReviewArgs = {
    input: IDeletePullRequestReviewInput;
};

export type IMutationDeletePullRequestReviewCommentArgs = {
    input: IDeletePullRequestReviewCommentInput;
};

export type IMutationDeleteRefArgs = {
    input: IDeleteRefInput;
};

export type IMutationDeleteTeamDiscussionArgs = {
    input: IDeleteTeamDiscussionInput;
};

export type IMutationDeleteTeamDiscussionCommentArgs = {
    input: IDeleteTeamDiscussionCommentInput;
};

export type IMutationDismissPullRequestReviewArgs = {
    input: IDismissPullRequestReviewInput;
};

export type IMutationFollowUserArgs = {
    input: IFollowUserInput;
};

export type IMutationInviteEnterpriseAdminArgs = {
    input: IInviteEnterpriseAdminInput;
};

export type IMutationLinkRepositoryToProjectArgs = {
    input: ILinkRepositoryToProjectInput;
};

export type IMutationLockLockableArgs = {
    input: ILockLockableInput;
};

export type IMutationMergeBranchArgs = {
    input: IMergeBranchInput;
};

export type IMutationMergePullRequestArgs = {
    input: IMergePullRequestInput;
};

export type IMutationMoveProjectCardArgs = {
    input: IMoveProjectCardInput;
};

export type IMutationMoveProjectColumnArgs = {
    input: IMoveProjectColumnInput;
};

export type IMutationRegenerateEnterpriseIdentityProviderRecoveryCodesArgs = {
    input: IRegenerateEnterpriseIdentityProviderRecoveryCodesInput;
};

export type IMutationRemoveAssigneesFromAssignableArgs = {
    input: IRemoveAssigneesFromAssignableInput;
};

export type IMutationRemoveEnterpriseAdminArgs = {
    input: IRemoveEnterpriseAdminInput;
};

export type IMutationRemoveEnterpriseOrganizationArgs = {
    input: IRemoveEnterpriseOrganizationInput;
};

export type IMutationRemoveLabelsFromLabelableArgs = {
    input: IRemoveLabelsFromLabelableInput;
};

export type IMutationRemoveOutsideCollaboratorArgs = {
    input: IRemoveOutsideCollaboratorInput;
};

export type IMutationRemoveReactionArgs = {
    input: IRemoveReactionInput;
};

export type IMutationRemoveStarArgs = {
    input: IRemoveStarInput;
};

export type IMutationReopenIssueArgs = {
    input: IReopenIssueInput;
};

export type IMutationReopenPullRequestArgs = {
    input: IReopenPullRequestInput;
};

export type IMutationRequestReviewsArgs = {
    input: IRequestReviewsInput;
};

export type IMutationResolveReviewThreadArgs = {
    input: IResolveReviewThreadInput;
};

export type IMutationSubmitPullRequestReviewArgs = {
    input: ISubmitPullRequestReviewInput;
};

export type IMutationTransferIssueArgs = {
    input: ITransferIssueInput;
};

export type IMutationUnarchiveRepositoryArgs = {
    input: IUnarchiveRepositoryInput;
};

export type IMutationUnfollowUserArgs = {
    input: IUnfollowUserInput;
};

export type IMutationUnlinkRepositoryFromProjectArgs = {
    input: IUnlinkRepositoryFromProjectInput;
};

export type IMutationUnlockLockableArgs = {
    input: IUnlockLockableInput;
};

export type IMutationUnmarkIssueAsDuplicateArgs = {
    input: IUnmarkIssueAsDuplicateInput;
};

export type IMutationUnresolveReviewThreadArgs = {
    input: IUnresolveReviewThreadInput;
};

export type IMutationUpdateBranchProtectionRuleArgs = {
    input: IUpdateBranchProtectionRuleInput;
};

export type IMutationUpdateEnterpriseActionExecutionCapabilitySettingArgs = {
    input: IUpdateEnterpriseActionExecutionCapabilitySettingInput;
};

export type IMutationUpdateEnterpriseAdministratorRoleArgs = {
    input: IUpdateEnterpriseAdministratorRoleInput;
};

export type IMutationUpdateEnterpriseAllowPrivateRepositoryForkingSettingArgs = {
    input: IUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput;
};

export type IMutationUpdateEnterpriseDefaultRepositoryPermissionSettingArgs = {
    input: IUpdateEnterpriseDefaultRepositoryPermissionSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingArgs = {
    input: IUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput;
};

export type IMutationUpdateEnterpriseMembersCanCreateRepositoriesSettingArgs = {
    input: IUpdateEnterpriseMembersCanCreateRepositoriesSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanDeleteIssuesSettingArgs = {
    input: IUpdateEnterpriseMembersCanDeleteIssuesSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanDeleteRepositoriesSettingArgs = {
    input: IUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanInviteCollaboratorsSettingArgs = {
    input: IUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanMakePurchasesSettingArgs = {
    input: IUpdateEnterpriseMembersCanMakePurchasesSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingArgs = {
    input: IUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput;
};

export type IMutationUpdateEnterpriseMembersCanViewDependencyInsightsSettingArgs = {
    input: IUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput;
};

export type IMutationUpdateEnterpriseOrganizationProjectsSettingArgs = {
    input: IUpdateEnterpriseOrganizationProjectsSettingInput;
};

export type IMutationUpdateEnterpriseProfileArgs = {
    input: IUpdateEnterpriseProfileInput;
};

export type IMutationUpdateEnterpriseRepositoryProjectsSettingArgs = {
    input: IUpdateEnterpriseRepositoryProjectsSettingInput;
};

export type IMutationUpdateEnterpriseTeamDiscussionsSettingArgs = {
    input: IUpdateEnterpriseTeamDiscussionsSettingInput;
};

export type IMutationUpdateEnterpriseTwoFactorAuthenticationRequiredSettingArgs = {
    input: IUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput;
};

export type IMutationUpdateIssueArgs = {
    input: IUpdateIssueInput;
};

export type IMutationUpdateIssueCommentArgs = {
    input: IUpdateIssueCommentInput;
};

export type IMutationUpdateProjectArgs = {
    input: IUpdateProjectInput;
};

export type IMutationUpdateProjectCardArgs = {
    input: IUpdateProjectCardInput;
};

export type IMutationUpdateProjectColumnArgs = {
    input: IUpdateProjectColumnInput;
};

export type IMutationUpdatePullRequestArgs = {
    input: IUpdatePullRequestInput;
};

export type IMutationUpdatePullRequestReviewArgs = {
    input: IUpdatePullRequestReviewInput;
};

export type IMutationUpdatePullRequestReviewCommentArgs = {
    input: IUpdatePullRequestReviewCommentInput;
};

export type IMutationUpdateRefArgs = {
    input: IUpdateRefInput;
};

export type IMutationUpdateRepositoryArgs = {
    input: IUpdateRepositoryInput;
};

export type IMutationUpdateSubscriptionArgs = {
    input: IUpdateSubscriptionInput;
};

export type IMutationUpdateTeamDiscussionArgs = {
    input: IUpdateTeamDiscussionInput;
};

export type IMutationUpdateTeamDiscussionCommentArgs = {
    input: IUpdateTeamDiscussionCommentInput;
};

export type IMutationUpdateTopicsArgs = {
    input: IUpdateTopicsInput;
};

export type INode = {
    id: Scalars['ID'];
};

export type IOauthApplicationAuditEntryData = {
    oauthApplicationName: Maybe<Scalars['String']>;
    oauthApplicationResourcePath: Maybe<Scalars['URI']>;
    oauthApplicationUrl: Maybe<Scalars['URI']>;
};

export type IOauthApplicationCreateAuditEntry = INode &
    IAuditEntry &
    IOauthApplicationAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        applicationUrl: Maybe<Scalars['URI']>;
        callbackUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        oauthApplicationName: Maybe<Scalars['String']>;
        oauthApplicationResourcePath: Maybe<Scalars['URI']>;
        oauthApplicationUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        rateLimit: Maybe<Scalars['Int']>;
        state: Maybe<OauthApplicationCreateAuditEntryState>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OauthApplicationCreateAuditEntryState {
    Active = 'ACTIVE',
    Suspended = 'SUSPENDED',
    PendingDeletion = 'PENDING_DELETION',
}

export enum OauthApplicationRevokeTokensAuditEntryState {
    Active = 'ACTIVE',
    Suspended = 'SUSPENDED',
    PendingDeletion = 'PENDING_DELETION',
}

export enum OperationType {
    Access = 'ACCESS',
    Authentication = 'AUTHENTICATION',
    Create = 'CREATE',
    Modify = 'MODIFY',
    Remove = 'REMOVE',
    Restore = 'RESTORE',
    Transfer = 'TRANSFER',
}

export enum OrderDirection {
    Asc = 'ASC',
    Desc = 'DESC',
}

export type IOrgAddBillingManagerAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        invitationEmail: Maybe<Scalars['String']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgAddMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        permission: Maybe<OrgAddMemberAuditEntryPermission>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgAddMemberAuditEntryPermission {
    Read = 'READ',
    Admin = 'ADMIN',
}

export type IOrganization = INode &
    IActor &
    IRegistryPackageOwner &
    IRegistryPackageSearch &
    IProjectOwner &
    IRepositoryOwner &
    IUniformResourceLocatable &
    IMemberStatusable &
    IProfileOwner &
    ISponsorable & {
        anyPinnableItems: Scalars['Boolean'];
        auditLog: IOrganizationAuditEntryConnection;
        avatarUrl: Scalars['URI'];
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        description: Maybe<Scalars['String']>;
        descriptionHTML: Maybe<Scalars['String']>;
        email: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        isVerified: Scalars['Boolean'];
        itemShowcase: IProfileItemShowcase;
        location: Maybe<Scalars['String']>;
        login: Scalars['String'];
        memberStatuses: IUserStatusConnection;
        membersWithRole: IOrganizationMemberConnection;
        name: Maybe<Scalars['String']>;
        newTeamResourcePath: Scalars['URI'];
        newTeamUrl: Scalars['URI'];
        organizationBillingEmail: Maybe<Scalars['String']>;
        pendingMembers: IUserConnection;
        pinnableItems: IPinnableItemConnection;
        pinnedItems: IPinnableItemConnection;
        pinnedItemsRemaining: Scalars['Int'];
        pinnedRepositories: IRepositoryConnection;
        project: Maybe<IProject>;
        projects: IProjectConnection;
        projectsResourcePath: Scalars['URI'];
        projectsUrl: Scalars['URI'];
        registryPackages: IRegistryPackageConnection;
        registryPackagesForQuery: IRegistryPackageConnection;
        repositories: IRepositoryConnection;
        repository: Maybe<IRepository>;
        requiresTwoFactorAuthentication: Maybe<Scalars['Boolean']>;
        resourcePath: Scalars['URI'];
        samlIdentityProvider: Maybe<IOrganizationIdentityProvider>;
        sponsorsListing: Maybe<ISponsorsListing>;
        sponsorshipsAsMaintainer: ISponsorshipConnection;
        sponsorshipsAsSponsor: ISponsorshipConnection;
        team: Maybe<ITeam>;
        teams: ITeamConnection;
        teamsResourcePath: Scalars['URI'];
        teamsUrl: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        viewerCanAdminister: Scalars['Boolean'];
        viewerCanChangePinnedItems: Scalars['Boolean'];
        viewerCanCreateProjects: Scalars['Boolean'];
        viewerCanCreateRepositories: Scalars['Boolean'];
        viewerCanCreateTeams: Scalars['Boolean'];
        viewerIsAMember: Scalars['Boolean'];
        websiteUrl: Maybe<Scalars['URI']>;
    };

export type IOrganizationAnyPinnableItemsArgs = {
    type: Maybe<PinnableItemType>;
};

export type IOrganizationAuditLogArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    orderBy?: Maybe<IAuditLogOrder>;
};

export type IOrganizationAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IOrganizationMemberStatusesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IUserStatusOrder>;
};

export type IOrganizationMembersWithRoleArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationPendingMembersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationPinnableItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationPinnedItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationPinnedRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationProjectArgs = {
    number: Scalars['Int'];
};

export type IOrganizationProjectsArgs = {
    orderBy: Maybe<IProjectOrder>;
    search: Maybe<Scalars['String']>;
    states: Maybe<Array<ProjectState>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationRegistryPackagesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['String']>;
    names: Maybe<Array<Maybe<Scalars['String']>>>;
    repositoryId: Maybe<Scalars['ID']>;
    packageType: Maybe<RegistryPackageType>;
    registryPackageType: Maybe<Scalars['String']>;
    publicOnly?: Maybe<Scalars['Boolean']>;
};

export type IOrganizationRegistryPackagesForQueryArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    packageType: Maybe<RegistryPackageType>;
};

export type IOrganizationRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    isFork: Maybe<Scalars['Boolean']>;
};

export type IOrganizationRepositoryArgs = {
    name: Scalars['String'];
};

export type IOrganizationSponsorshipsAsMaintainerArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    includePrivate?: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type IOrganizationSponsorshipsAsSponsorArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type IOrganizationTeamArgs = {
    slug: Scalars['String'];
};

export type IOrganizationTeamsArgs = {
    privacy: Maybe<TeamPrivacy>;
    role: Maybe<TeamRole>;
    query: Maybe<Scalars['String']>;
    userLogins: Maybe<Array<Scalars['String']>>;
    orderBy: Maybe<ITeamOrder>;
    ldapMapped: Maybe<Scalars['Boolean']>;
    rootTeamsOnly?: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationAuditEntry =
    | IMembersCanDeleteReposClearAuditEntry
    | IMembersCanDeleteReposDisableAuditEntry
    | IMembersCanDeleteReposEnableAuditEntry
    | IOauthApplicationCreateAuditEntry
    | IOrgAddBillingManagerAuditEntry
    | IOrgAddMemberAuditEntry
    | IOrgBlockUserAuditEntry
    | IOrgConfigDisableCollaboratorsOnlyAuditEntry
    | IOrgConfigEnableCollaboratorsOnlyAuditEntry
    | IOrgCreateAuditEntry
    | IOrgDisableOauthAppRestrictionsAuditEntry
    | IOrgDisableSamlAuditEntry
    | IOrgDisableTwoFactorRequirementAuditEntry
    | IOrgEnableOauthAppRestrictionsAuditEntry
    | IOrgEnableSamlAuditEntry
    | IOrgEnableTwoFactorRequirementAuditEntry
    | IOrgInviteMemberAuditEntry
    | IOrgInviteToBusinessAuditEntry
    | IOrgOauthAppAccessApprovedAuditEntry
    | IOrgOauthAppAccessDeniedAuditEntry
    | IOrgOauthAppAccessRequestedAuditEntry
    | IOrgRemoveBillingManagerAuditEntry
    | IOrgRemoveMemberAuditEntry
    | IOrgRemoveOutsideCollaboratorAuditEntry
    | IOrgRestoreMemberAuditEntry
    | IOrgUnblockUserAuditEntry
    | IOrgUpdateDefaultRepositoryPermissionAuditEntry
    | IOrgUpdateMemberAuditEntry
    | IOrgUpdateMemberRepositoryCreationPermissionAuditEntry
    | IOrgUpdateMemberRepositoryInvitationPermissionAuditEntry
    | IPrivateRepositoryForkingDisableAuditEntry
    | IPrivateRepositoryForkingEnableAuditEntry
    | IRepoAccessAuditEntry
    | IRepoAddMemberAuditEntry
    | IRepoAddTopicAuditEntry
    | IRepoArchivedAuditEntry
    | IRepoChangeMergeSettingAuditEntry
    | IRepoConfigDisableAnonymousGitAccessAuditEntry
    | IRepoConfigDisableCollaboratorsOnlyAuditEntry
    | IRepoConfigDisableContributorsOnlyAuditEntry
    | IRepoConfigDisableSockpuppetDisallowedAuditEntry
    | IRepoConfigEnableAnonymousGitAccessAuditEntry
    | IRepoConfigEnableCollaboratorsOnlyAuditEntry
    | IRepoConfigEnableContributorsOnlyAuditEntry
    | IRepoConfigEnableSockpuppetDisallowedAuditEntry
    | IRepoConfigLockAnonymousGitAccessAuditEntry
    | IRepoConfigUnlockAnonymousGitAccessAuditEntry
    | IRepoCreateAuditEntry
    | IRepoDestroyAuditEntry
    | IRepoRemoveMemberAuditEntry
    | IRepoRemoveTopicAuditEntry
    | IRepositoryVisibilityChangeDisableAuditEntry
    | IRepositoryVisibilityChangeEnableAuditEntry
    | ITeamAddMemberAuditEntry
    | ITeamAddRepositoryAuditEntry
    | ITeamChangeParentTeamAuditEntry
    | ITeamRemoveMemberAuditEntry
    | ITeamRemoveRepositoryAuditEntry;

export type IOrganizationAuditEntryConnection = {
    edges: Maybe<Array<Maybe<IOrganizationAuditEntryEdge>>>;
    nodes: Maybe<Array<Maybe<IOrganizationAuditEntry>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IOrganizationAuditEntryData = {
    organization: Maybe<IOrganization>;
    organizationName: Maybe<Scalars['String']>;
    organizationResourcePath: Maybe<Scalars['URI']>;
    organizationUrl: Maybe<Scalars['URI']>;
};

export type IOrganizationAuditEntryEdge = {
    cursor: Scalars['String'];
    node: Maybe<IOrganizationAuditEntry>;
};

export type IOrganizationConnection = {
    edges: Maybe<Array<Maybe<IOrganizationEdge>>>;
    nodes: Maybe<Array<Maybe<IOrganization>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IOrganizationEdge = {
    cursor: Scalars['String'];
    node: Maybe<IOrganization>;
};

export type IOrganizationIdentityProvider = INode & {
    digestMethod: Maybe<Scalars['URI']>;
    externalIdentities: IExternalIdentityConnection;
    id: Scalars['ID'];
    idpCertificate: Maybe<Scalars['X509Certificate']>;
    issuer: Maybe<Scalars['String']>;
    organization: Maybe<IOrganization>;
    signatureMethod: Maybe<Scalars['URI']>;
    ssoUrl: Maybe<Scalars['URI']>;
};

export type IOrganizationIdentityProviderExternalIdentitiesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationInvitation = INode & {
    createdAt: Scalars['DateTime'];
    email: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    invitationType: OrganizationInvitationType;
    invitee: Maybe<IUser>;
    inviter: IUser;
    organization: IOrganization;
    role: OrganizationInvitationRole;
};

export type IOrganizationInvitationConnection = {
    edges: Maybe<Array<Maybe<IOrganizationInvitationEdge>>>;
    nodes: Maybe<Array<Maybe<IOrganizationInvitation>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IOrganizationInvitationEdge = {
    cursor: Scalars['String'];
    node: Maybe<IOrganizationInvitation>;
};

export enum OrganizationInvitationRole {
    DirectMember = 'DIRECT_MEMBER',
    Admin = 'ADMIN',
    BillingManager = 'BILLING_MANAGER',
    Reinstate = 'REINSTATE',
}

export enum OrganizationInvitationType {
    User = 'USER',
    Email = 'EMAIL',
}

export type IOrganizationMemberConnection = {
    edges: Maybe<Array<Maybe<IOrganizationMemberEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IOrganizationMemberEdge = {
    cursor: Scalars['String'];
    hasTwoFactorEnabled: Maybe<Scalars['Boolean']>;
    node: Maybe<IUser>;
    role: Maybe<OrganizationMemberRole>;
};

export enum OrganizationMemberRole {
    Member = 'MEMBER',
    Admin = 'ADMIN',
}

export enum OrganizationMembersCanCreateRepositoriesSettingValue {
    All = 'ALL',
    Private = 'PRIVATE',
    Disabled = 'DISABLED',
}

export type IOrganizationOrder = {
    field: OrganizationOrderField;
    direction: OrderDirection;
};

export enum OrganizationOrderField {
    CreatedAt = 'CREATED_AT',
    Login = 'LOGIN',
}

export type IOrganizationsHovercardContext = IHovercardContext & {
    message: Scalars['String'];
    octicon: Scalars['String'];
    relevantOrganizations: IOrganizationConnection;
    totalOrganizationCount: Scalars['Int'];
};

export type IOrganizationsHovercardContextRelevantOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrganizationTeamsHovercardContext = IHovercardContext & {
    message: Scalars['String'];
    octicon: Scalars['String'];
    relevantTeams: ITeamConnection;
    teamsResourcePath: Scalars['URI'];
    teamsUrl: Scalars['URI'];
    totalTeamCount: Scalars['Int'];
};

export type IOrganizationTeamsHovercardContextRelevantTeamsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IOrgBlockUserAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        blockedUser: Maybe<IUser>;
        blockedUserName: Maybe<Scalars['String']>;
        blockedUserResourcePath: Maybe<Scalars['URI']>;
        blockedUserUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgConfigDisableCollaboratorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgConfigEnableCollaboratorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgCreateAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        billingPlan: Maybe<OrgCreateAuditEntryBillingPlan>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgCreateAuditEntryBillingPlan {
    Free = 'FREE',
    Business = 'BUSINESS',
    BusinessPlus = 'BUSINESS_PLUS',
    Unlimited = 'UNLIMITED',
    TieredPerSeat = 'TIERED_PER_SEAT',
}

export type IOrgDisableOauthAppRestrictionsAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgDisableSamlAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        digestMethodUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        issuerUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        signatureMethodUrl: Maybe<Scalars['URI']>;
        singleSignOnUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgDisableTwoFactorRequirementAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgEnableOauthAppRestrictionsAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgEnableSamlAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        digestMethodUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        issuerUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        signatureMethodUrl: Maybe<Scalars['URI']>;
        singleSignOnUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgEnableTwoFactorRequirementAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgInviteMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        email: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationInvitation: Maybe<IOrganizationInvitation>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgInviteToBusinessAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgOauthAppAccessApprovedAuditEntry = INode &
    IAuditEntry &
    IOauthApplicationAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        oauthApplicationName: Maybe<Scalars['String']>;
        oauthApplicationResourcePath: Maybe<Scalars['URI']>;
        oauthApplicationUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgOauthAppAccessDeniedAuditEntry = INode &
    IAuditEntry &
    IOauthApplicationAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        oauthApplicationName: Maybe<Scalars['String']>;
        oauthApplicationResourcePath: Maybe<Scalars['URI']>;
        oauthApplicationUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgOauthAppAccessRequestedAuditEntry = INode &
    IAuditEntry &
    IOauthApplicationAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        oauthApplicationName: Maybe<Scalars['String']>;
        oauthApplicationResourcePath: Maybe<Scalars['URI']>;
        oauthApplicationUrl: Maybe<Scalars['URI']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgRemoveBillingManagerAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        reason: Maybe<OrgRemoveBillingManagerAuditEntryReason>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgRemoveBillingManagerAuditEntryReason {
    TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
    SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
    SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
}

export type IOrgRemoveMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        membershipTypes: Maybe<Array<OrgRemoveMemberAuditEntryMembershipType>>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        reason: Maybe<OrgRemoveMemberAuditEntryReason>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgRemoveMemberAuditEntryMembershipType {
    DirectMember = 'DIRECT_MEMBER',
    Admin = 'ADMIN',
    BillingManager = 'BILLING_MANAGER',
    Unaffiliated = 'UNAFFILIATED',
    OutsideCollaborator = 'OUTSIDE_COLLABORATOR',
}

export enum OrgRemoveMemberAuditEntryReason {
    TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
    SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
    SamlSsoEnforcementRequiresExternalIdentity = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
}

export type IOrgRemoveOutsideCollaboratorAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        membershipTypes: Maybe<Array<OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        reason: Maybe<OrgRemoveOutsideCollaboratorAuditEntryReason>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
    OutsideCollaborator = 'OUTSIDE_COLLABORATOR',
    Unaffiliated = 'UNAFFILIATED',
    BillingManager = 'BILLING_MANAGER',
}

export enum OrgRemoveOutsideCollaboratorAuditEntryReason {
    TwoFactorRequirementNonCompliance = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
    SamlExternalIdentityMissing = 'SAML_EXTERNAL_IDENTITY_MISSING',
}

export type IOrgRestoreMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        restoredCustomEmailRoutingsCount: Maybe<Scalars['Int']>;
        restoredIssueAssignmentsCount: Maybe<Scalars['Int']>;
        restoredMemberships: Maybe<Array<IOrgRestoreMemberAuditEntryMembership>>;
        restoredMembershipsCount: Maybe<Scalars['Int']>;
        restoredRepositoriesCount: Maybe<Scalars['Int']>;
        restoredRepositoryStarsCount: Maybe<Scalars['Int']>;
        restoredRepositoryWatchesCount: Maybe<Scalars['Int']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgRestoreMemberAuditEntryMembership =
    | IOrgRestoreMemberMembershipOrganizationAuditEntryData
    | IOrgRestoreMemberMembershipRepositoryAuditEntryData
    | IOrgRestoreMemberMembershipTeamAuditEntryData;

export type IOrgRestoreMemberMembershipOrganizationAuditEntryData = IOrganizationAuditEntryData & {
    organization: Maybe<IOrganization>;
    organizationName: Maybe<Scalars['String']>;
    organizationResourcePath: Maybe<Scalars['URI']>;
    organizationUrl: Maybe<Scalars['URI']>;
};

export type IOrgRestoreMemberMembershipRepositoryAuditEntryData = IRepositoryAuditEntryData & {
    repository: Maybe<IRepository>;
    repositoryName: Maybe<Scalars['String']>;
    repositoryResourcePath: Maybe<Scalars['URI']>;
    repositoryUrl: Maybe<Scalars['URI']>;
};

export type IOrgRestoreMemberMembershipTeamAuditEntryData = ITeamAuditEntryData & {
    team: Maybe<ITeam>;
    teamName: Maybe<Scalars['String']>;
    teamResourcePath: Maybe<Scalars['URI']>;
    teamUrl: Maybe<Scalars['URI']>;
};

export type IOrgUnblockUserAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        blockedUser: Maybe<IUser>;
        blockedUserName: Maybe<Scalars['String']>;
        blockedUserResourcePath: Maybe<Scalars['URI']>;
        blockedUserUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IOrgUpdateDefaultRepositoryPermissionAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        permission: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
        permissionWas: Maybe<OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
    Read = 'READ',
    Write = 'WRITE',
    Admin = 'ADMIN',
    None = 'NONE',
}

export type IOrgUpdateMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        permission: Maybe<OrgUpdateMemberAuditEntryPermission>;
        permissionWas: Maybe<OrgUpdateMemberAuditEntryPermission>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum OrgUpdateMemberAuditEntryPermission {
    Read = 'READ',
    Admin = 'ADMIN',
}

export type IOrgUpdateMemberRepositoryCreationPermissionAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        canCreateRepositories: Maybe<Scalars['Boolean']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
    };

export enum OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
    All = 'ALL',
    Public = 'PUBLIC',
}

export type IOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        canInviteOutsideCollaboratorsToRepositories: Maybe<Scalars['Boolean']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IPageInfo = {
    endCursor: Maybe<Scalars['String']>;
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor: Maybe<Scalars['String']>;
};

export type IPermissionGranter = IOrganization | IRepository | ITeam;

export type IPermissionSource = {
    organization: IOrganization;
    permission: DefaultRepositoryPermissionField;
    source: IPermissionGranter;
};

export type IPinIssueInput = {
    issueId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IPinnableItem = IGist | IRepository;

export type IPinnableItemConnection = {
    edges: Maybe<Array<Maybe<IPinnableItemEdge>>>;
    nodes: Maybe<Array<Maybe<IPinnableItem>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPinnableItemEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPinnableItem>;
};

export enum PinnableItemType {
    Repository = 'REPOSITORY',
    Gist = 'GIST',
    Issue = 'ISSUE',
    Project = 'PROJECT',
    PullRequest = 'PULL_REQUEST',
    User = 'USER',
    Organization = 'ORGANIZATION',
    Team = 'TEAM',
}

export type IPinnedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    issue: IIssue;
};

export type IPrivateRepositoryForkingDisableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IPrivateRepositoryForkingEnableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IProfileItemShowcase = {
    hasPinnedItems: Scalars['Boolean'];
    items: IPinnableItemConnection;
};

export type IProfileItemShowcaseItemsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IProfileOwner = {
    anyPinnableItems: Scalars['Boolean'];
    email: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    itemShowcase: IProfileItemShowcase;
    location: Maybe<Scalars['String']>;
    login: Scalars['String'];
    name: Maybe<Scalars['String']>;
    pinnableItems: IPinnableItemConnection;
    pinnedItems: IPinnableItemConnection;
    pinnedItemsRemaining: Scalars['Int'];
    viewerCanChangePinnedItems: Scalars['Boolean'];
    websiteUrl: Maybe<Scalars['URI']>;
};

export type IProfileOwnerAnyPinnableItemsArgs = {
    type: Maybe<PinnableItemType>;
};

export type IProfileOwnerPinnableItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IProfileOwnerPinnedItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IProject = INode &
    IClosable &
    IUpdatable & {
        body: Maybe<Scalars['String']>;
        bodyHTML: Scalars['HTML'];
        closed: Scalars['Boolean'];
        closedAt: Maybe<Scalars['DateTime']>;
        columns: IProjectColumnConnection;
        createdAt: Scalars['DateTime'];
        creator: Maybe<IActor>;
        databaseId: Maybe<Scalars['Int']>;
        id: Scalars['ID'];
        name: Scalars['String'];
        number: Scalars['Int'];
        owner: IProjectOwner;
        pendingCards: IProjectCardConnection;
        resourcePath: Scalars['URI'];
        state: ProjectState;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        viewerCanUpdate: Scalars['Boolean'];
    };

export type IProjectColumnsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IProjectPendingCardsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type IProjectCard = INode & {
    column: Maybe<IProjectColumn>;
    content: Maybe<IProjectCardItem>;
    createdAt: Scalars['DateTime'];
    creator: Maybe<IActor>;
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    isArchived: Scalars['Boolean'];
    note: Maybe<Scalars['String']>;
    project: IProject;
    resourcePath: Scalars['URI'];
    state: Maybe<ProjectCardState>;
    updatedAt: Scalars['DateTime'];
    url: Scalars['URI'];
};

export enum ProjectCardArchivedState {
    Archived = 'ARCHIVED',
    NotArchived = 'NOT_ARCHIVED',
}

export type IProjectCardConnection = {
    edges: Maybe<Array<Maybe<IProjectCardEdge>>>;
    nodes: Maybe<Array<Maybe<IProjectCard>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IProjectCardEdge = {
    cursor: Scalars['String'];
    node: Maybe<IProjectCard>;
};

export type IProjectCardImport = {
    repository: Scalars['String'];
    number: Scalars['Int'];
};

export type IProjectCardItem = IIssue | IPullRequest;

export enum ProjectCardState {
    ContentOnly = 'CONTENT_ONLY',
    NoteOnly = 'NOTE_ONLY',
    Redacted = 'REDACTED',
}

export type IProjectColumn = INode & {
    cards: IProjectCardConnection;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    name: Scalars['String'];
    project: IProject;
    purpose: Maybe<ProjectColumnPurpose>;
    resourcePath: Scalars['URI'];
    updatedAt: Scalars['DateTime'];
    url: Scalars['URI'];
};

export type IProjectColumnCardsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type IProjectColumnConnection = {
    edges: Maybe<Array<Maybe<IProjectColumnEdge>>>;
    nodes: Maybe<Array<Maybe<IProjectColumn>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IProjectColumnEdge = {
    cursor: Scalars['String'];
    node: Maybe<IProjectColumn>;
};

export type IProjectColumnImport = {
    columnName: Scalars['String'];
    position: Scalars['Int'];
    issues: Maybe<Array<IProjectCardImport>>;
};

export enum ProjectColumnPurpose {
    Todo = 'TODO',
    InProgress = 'IN_PROGRESS',
    Done = 'DONE',
}

export type IProjectConnection = {
    edges: Maybe<Array<Maybe<IProjectEdge>>>;
    nodes: Maybe<Array<Maybe<IProject>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IProjectEdge = {
    cursor: Scalars['String'];
    node: Maybe<IProject>;
};

export type IProjectOrder = {
    field: ProjectOrderField;
    direction: OrderDirection;
};

export enum ProjectOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    Name = 'NAME',
}

export type IProjectOwner = {
    id: Scalars['ID'];
    project: Maybe<IProject>;
    projects: IProjectConnection;
    projectsResourcePath: Scalars['URI'];
    projectsUrl: Scalars['URI'];
    viewerCanCreateProjects: Scalars['Boolean'];
};

export type IProjectOwnerProjectArgs = {
    number: Scalars['Int'];
};

export type IProjectOwnerProjectsArgs = {
    orderBy: Maybe<IProjectOrder>;
    search: Maybe<Scalars['String']>;
    states: Maybe<Array<ProjectState>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export enum ProjectState {
    Open = 'OPEN',
    Closed = 'CLOSED',
}

export enum ProjectTemplate {
    BasicKanban = 'BASIC_KANBAN',
    AutomatedKanbanV2 = 'AUTOMATED_KANBAN_V2',
    AutomatedReviewsKanban = 'AUTOMATED_REVIEWS_KANBAN',
    BugTriage = 'BUG_TRIAGE',
}

export type IPublicKey = INode & {
    accessedAt: Maybe<Scalars['DateTime']>;
    createdAt: Maybe<Scalars['DateTime']>;
    fingerprint: Scalars['String'];
    id: Scalars['ID'];
    isReadOnly: Maybe<Scalars['Boolean']>;
    key: Scalars['String'];
    updatedAt: Maybe<Scalars['DateTime']>;
};

export type IPublicKeyConnection = {
    edges: Maybe<Array<Maybe<IPublicKeyEdge>>>;
    nodes: Maybe<Array<Maybe<IPublicKey>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPublicKeyEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPublicKey>;
};

export type IPullRequest = INode &
    IAssignable &
    IClosable &
    IComment &
    IUpdatable &
    IUpdatableComment &
    ILabelable &
    ILockable &
    IReactable &
    IRepositoryNode &
    ISubscribable &
    IUniformResourceLocatable & {
        activeLockReason: Maybe<LockReason>;
        additions: Scalars['Int'];
        assignees: IUserConnection;
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        baseRef: Maybe<IRef>;
        baseRefName: Scalars['String'];
        baseRefOid: Scalars['GitObjectID'];
        baseRepository: Maybe<IRepository>;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        changedFiles: Scalars['Int'];
        closed: Scalars['Boolean'];
        closedAt: Maybe<Scalars['DateTime']>;
        comments: IIssueCommentConnection;
        commits: IPullRequestCommitConnection;
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        deletions: Scalars['Int'];
        editor: Maybe<IActor>;
        files: Maybe<IPullRequestChangedFileConnection>;
        headRef: Maybe<IRef>;
        headRefName: Scalars['String'];
        headRefOid: Scalars['GitObjectID'];
        headRepository: Maybe<IRepository>;
        headRepositoryOwner: Maybe<IRepositoryOwner>;
        hovercard: IHovercard;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isCrossRepository: Scalars['Boolean'];
        labels: Maybe<ILabelConnection>;
        lastEditedAt: Maybe<Scalars['DateTime']>;
        locked: Scalars['Boolean'];
        maintainerCanModify: Scalars['Boolean'];
        mergeCommit: Maybe<ICommit>;
        mergeable: MergeableState;
        merged: Scalars['Boolean'];
        mergedAt: Maybe<Scalars['DateTime']>;
        mergedBy: Maybe<IActor>;
        milestone: Maybe<IMilestone>;
        number: Scalars['Int'];
        participants: IUserConnection;
        permalink: Scalars['URI'];
        potentialMergeCommit: Maybe<ICommit>;
        projectCards: IProjectCardConnection;
        publishedAt: Maybe<Scalars['DateTime']>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        revertResourcePath: Scalars['URI'];
        revertUrl: Scalars['URI'];
        reviewRequests: Maybe<IReviewRequestConnection>;
        reviewThreads: IPullRequestReviewThreadConnection;
        reviews: Maybe<IPullRequestReviewConnection>;
        state: PullRequestState;
        suggestedReviewers: Array<Maybe<ISuggestedReviewer>>;
        timeline: IPullRequestTimelineConnection;
        timelineItems: IPullRequestTimelineItemsConnection;
        title: Scalars['String'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanApplySuggestion: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
        viewerSubscription: Maybe<SubscriptionState>;
    };

export type IPullRequestAssigneesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestCommitsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestFilesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestHovercardArgs = {
    includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};

export type IPullRequestLabelsArgs = {
    orderBy?: Maybe<ILabelOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestParticipantsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestProjectCardsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    archivedStates?: Maybe<Array<Maybe<ProjectCardArchivedState>>>;
};

export type IPullRequestReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IPullRequestReviewRequestsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewThreadsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    states: Maybe<Array<PullRequestReviewState>>;
    author: Maybe<Scalars['String']>;
};

export type IPullRequestTimelineArgs = {
    since: Maybe<Scalars['DateTime']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestTimelineItemsArgs = {
    since: Maybe<Scalars['DateTime']>;
    skip: Maybe<Scalars['Int']>;
    itemTypes: Maybe<Array<PullRequestTimelineItemsItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestChangedFile = {
    additions: Scalars['Int'];
    deletions: Scalars['Int'];
    path: Scalars['String'];
};

export type IPullRequestChangedFileConnection = {
    edges: Maybe<Array<Maybe<IPullRequestChangedFileEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestChangedFile>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestChangedFileEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestChangedFile>;
};

export type IPullRequestCommit = INode &
    IUniformResourceLocatable & {
        commit: ICommit;
        id: Scalars['ID'];
        pullRequest: IPullRequest;
        resourcePath: Scalars['URI'];
        url: Scalars['URI'];
    };

export type IPullRequestCommitCommentThread = INode &
    IRepositoryNode & {
        comments: ICommitCommentConnection;
        commit: ICommit;
        id: Scalars['ID'];
        path: Maybe<Scalars['String']>;
        position: Maybe<Scalars['Int']>;
        pullRequest: IPullRequest;
        repository: IRepository;
    };

export type IPullRequestCommitCommentThreadCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestCommitConnection = {
    edges: Maybe<Array<Maybe<IPullRequestCommitEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestCommit>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestCommitEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestCommit>;
};

export type IPullRequestConnection = {
    edges: Maybe<Array<Maybe<IPullRequestEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequest>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestContributionsByRepository = {
    contributions: ICreatedPullRequestContributionConnection;
    repository: IRepository;
};

export type IPullRequestContributionsByRepositoryContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IPullRequestEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequest>;
};

export enum PullRequestMergeMethod {
    Merge = 'MERGE',
    Squash = 'SQUASH',
    Rebase = 'REBASE',
}

export type IPullRequestOrder = {
    field: PullRequestOrderField;
    direction: OrderDirection;
};

export enum PullRequestOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
}

export enum PullRequestPubSubTopic {
    Updated = 'UPDATED',
    Markasread = 'MARKASREAD',
    HeadRef = 'HEAD_REF',
    Timeline = 'TIMELINE',
    State = 'STATE',
}

export type IPullRequestReview = INode &
    IComment &
    IDeletable &
    IUpdatable &
    IUpdatableComment &
    IReactable &
    IRepositoryNode & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        comments: IPullRequestReviewCommentConnection;
        commit: Maybe<ICommit>;
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        onBehalfOf: ITeamConnection;
        publishedAt: Maybe<Scalars['DateTime']>;
        pullRequest: IPullRequest;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        state: PullRequestReviewState;
        submittedAt: Maybe<Scalars['DateTime']>;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type IPullRequestReviewCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewOnBehalfOfArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IPullRequestReviewUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewComment = INode &
    IComment &
    IDeletable &
    IUpdatable &
    IUpdatableComment &
    IReactable &
    IRepositoryNode & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        commit: Maybe<ICommit>;
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        diffHunk: Scalars['String'];
        draftedAt: Scalars['DateTime'];
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isMinimized: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        minimizedReason: Maybe<Scalars['String']>;
        originalCommit: Maybe<ICommit>;
        originalPosition: Scalars['Int'];
        outdated: Scalars['Boolean'];
        path: Scalars['String'];
        position: Maybe<Scalars['Int']>;
        publishedAt: Maybe<Scalars['DateTime']>;
        pullRequest: IPullRequest;
        pullRequestReview: Maybe<IPullRequestReview>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        replyTo: Maybe<IPullRequestReviewComment>;
        repository: IRepository;
        resourcePath: Scalars['URI'];
        state: PullRequestReviewCommentState;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanMinimize: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type IPullRequestReviewCommentReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IPullRequestReviewCommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewCommentConnection = {
    edges: Maybe<Array<Maybe<IPullRequestReviewCommentEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestReviewComment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestReviewCommentEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestReviewComment>;
};

export enum PullRequestReviewCommentState {
    Pending = 'PENDING',
    Submitted = 'SUBMITTED',
}

export type IPullRequestReviewConnection = {
    edges: Maybe<Array<Maybe<IPullRequestReviewEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestReview>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestReviewContributionsByRepository = {
    contributions: ICreatedPullRequestReviewContributionConnection;
    repository: IRepository;
};

export type IPullRequestReviewContributionsByRepositoryContributionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IContributionOrder>;
};

export type IPullRequestReviewEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestReview>;
};

export enum PullRequestReviewEvent {
    Comment = 'COMMENT',
    Approve = 'APPROVE',
    RequestChanges = 'REQUEST_CHANGES',
    Dismiss = 'DISMISS',
}

export enum PullRequestReviewState {
    Pending = 'PENDING',
    Commented = 'COMMENTED',
    Approved = 'APPROVED',
    ChangesRequested = 'CHANGES_REQUESTED',
    Dismissed = 'DISMISSED',
}

export type IPullRequestReviewThread = INode & {
    comments: IPullRequestReviewCommentConnection;
    id: Scalars['ID'];
    isResolved: Scalars['Boolean'];
    pullRequest: IPullRequest;
    repository: IRepository;
    resolvedBy: Maybe<IUser>;
    viewerCanResolve: Scalars['Boolean'];
    viewerCanUnresolve: Scalars['Boolean'];
};

export type IPullRequestReviewThreadCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    skip: Maybe<Scalars['Int']>;
};

export type IPullRequestReviewThreadConnection = {
    edges: Maybe<Array<Maybe<IPullRequestReviewThreadEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestReviewThread>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestReviewThreadEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestReviewThread>;
};

export type IPullRequestRevisionMarker = {
    createdAt: Scalars['DateTime'];
    lastSeenCommit: ICommit;
    pullRequest: IPullRequest;
};

export enum PullRequestState {
    Open = 'OPEN',
    Closed = 'CLOSED',
    Merged = 'MERGED',
}

export type IPullRequestTimelineConnection = {
    edges: Maybe<Array<Maybe<IPullRequestTimelineItemEdge>>>;
    nodes: Maybe<Array<Maybe<IPullRequestTimelineItem>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPullRequestTimelineItem =
    | IAssignedEvent
    | IBaseRefForcePushedEvent
    | IClosedEvent
    | ICommit
    | ICommitCommentThread
    | ICrossReferencedEvent
    | IDemilestonedEvent
    | IDeployedEvent
    | IDeploymentEnvironmentChangedEvent
    | IHeadRefDeletedEvent
    | IHeadRefForcePushedEvent
    | IHeadRefRestoredEvent
    | IIssueComment
    | ILabeledEvent
    | ILockedEvent
    | IMergedEvent
    | IMilestonedEvent
    | IPullRequestReview
    | IPullRequestReviewComment
    | IPullRequestReviewThread
    | IReferencedEvent
    | IRenamedTitleEvent
    | IReopenedEvent
    | IReviewDismissedEvent
    | IReviewRequestRemovedEvent
    | IReviewRequestedEvent
    | ISubscribedEvent
    | IUnassignedEvent
    | IUnlabeledEvent
    | IUnlockedEvent
    | IUnsubscribedEvent
    | IUserBlockedEvent;

export type IPullRequestTimelineItemEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestTimelineItem>;
};

export type IPullRequestTimelineItems =
    | IAddedToProjectEvent
    | IAssignedEvent
    | IBaseRefChangedEvent
    | IBaseRefForcePushedEvent
    | IClosedEvent
    | ICommentDeletedEvent
    | IConvertedNoteToIssueEvent
    | ICrossReferencedEvent
    | IDemilestonedEvent
    | IDeployedEvent
    | IDeploymentEnvironmentChangedEvent
    | IHeadRefDeletedEvent
    | IHeadRefForcePushedEvent
    | IHeadRefRestoredEvent
    | IIssueComment
    | ILabeledEvent
    | ILockedEvent
    | IMarkedAsDuplicateEvent
    | IMentionedEvent
    | IMergedEvent
    | IMilestonedEvent
    | IMovedColumnsInProjectEvent
    | IPinnedEvent
    | IPullRequestCommit
    | IPullRequestCommitCommentThread
    | IPullRequestReview
    | IPullRequestReviewThread
    | IPullRequestRevisionMarker
    | IReadyForReviewEvent
    | IReferencedEvent
    | IRemovedFromProjectEvent
    | IRenamedTitleEvent
    | IReopenedEvent
    | IReviewDismissedEvent
    | IReviewRequestRemovedEvent
    | IReviewRequestedEvent
    | ISubscribedEvent
    | ITransferredEvent
    | IUnassignedEvent
    | IUnlabeledEvent
    | IUnlockedEvent
    | IUnpinnedEvent
    | IUnsubscribedEvent
    | IUserBlockedEvent;

export type IPullRequestTimelineItemsConnection = {
    edges: Maybe<Array<Maybe<IPullRequestTimelineItemsEdge>>>;
    filteredCount: Scalars['Int'];
    nodes: Maybe<Array<Maybe<IPullRequestTimelineItems>>>;
    pageCount: Scalars['Int'];
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
};

export type IPullRequestTimelineItemsEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPullRequestTimelineItems>;
};

export enum PullRequestTimelineItemsItemType {
    PullRequestCommit = 'PULL_REQUEST_COMMIT',
    PullRequestCommitCommentThread = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
    PullRequestReview = 'PULL_REQUEST_REVIEW',
    PullRequestReviewThread = 'PULL_REQUEST_REVIEW_THREAD',
    PullRequestRevisionMarker = 'PULL_REQUEST_REVISION_MARKER',
    BaseRefChangedEvent = 'BASE_REF_CHANGED_EVENT',
    BaseRefForcePushedEvent = 'BASE_REF_FORCE_PUSHED_EVENT',
    DeployedEvent = 'DEPLOYED_EVENT',
    DeploymentEnvironmentChangedEvent = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
    HeadRefDeletedEvent = 'HEAD_REF_DELETED_EVENT',
    HeadRefForcePushedEvent = 'HEAD_REF_FORCE_PUSHED_EVENT',
    HeadRefRestoredEvent = 'HEAD_REF_RESTORED_EVENT',
    MergedEvent = 'MERGED_EVENT',
    ReviewDismissedEvent = 'REVIEW_DISMISSED_EVENT',
    ReviewRequestedEvent = 'REVIEW_REQUESTED_EVENT',
    ReviewRequestRemovedEvent = 'REVIEW_REQUEST_REMOVED_EVENT',
    ReadyForReviewEvent = 'READY_FOR_REVIEW_EVENT',
    IssueComment = 'ISSUE_COMMENT',
    CrossReferencedEvent = 'CROSS_REFERENCED_EVENT',
    AddedToProjectEvent = 'ADDED_TO_PROJECT_EVENT',
    AssignedEvent = 'ASSIGNED_EVENT',
    ClosedEvent = 'CLOSED_EVENT',
    CommentDeletedEvent = 'COMMENT_DELETED_EVENT',
    ConvertedNoteToIssueEvent = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
    DemilestonedEvent = 'DEMILESTONED_EVENT',
    LabeledEvent = 'LABELED_EVENT',
    LockedEvent = 'LOCKED_EVENT',
    MarkedAsDuplicateEvent = 'MARKED_AS_DUPLICATE_EVENT',
    MentionedEvent = 'MENTIONED_EVENT',
    MilestonedEvent = 'MILESTONED_EVENT',
    MovedColumnsInProjectEvent = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
    PinnedEvent = 'PINNED_EVENT',
    ReferencedEvent = 'REFERENCED_EVENT',
    RemovedFromProjectEvent = 'REMOVED_FROM_PROJECT_EVENT',
    RenamedTitleEvent = 'RENAMED_TITLE_EVENT',
    ReopenedEvent = 'REOPENED_EVENT',
    SubscribedEvent = 'SUBSCRIBED_EVENT',
    TransferredEvent = 'TRANSFERRED_EVENT',
    UnassignedEvent = 'UNASSIGNED_EVENT',
    UnlabeledEvent = 'UNLABELED_EVENT',
    UnlockedEvent = 'UNLOCKED_EVENT',
    UserBlockedEvent = 'USER_BLOCKED_EVENT',
    UnpinnedEvent = 'UNPINNED_EVENT',
    UnsubscribedEvent = 'UNSUBSCRIBED_EVENT',
}

export enum PullRequestUpdateState {
    Open = 'OPEN',
    Closed = 'CLOSED',
}

export type IPushAllowance = INode & {
    actor: Maybe<IPushAllowanceActor>;
    branchProtectionRule: Maybe<IBranchProtectionRule>;
    id: Scalars['ID'];
};

export type IPushAllowanceActor = IApp | ITeam | IUser;

export type IPushAllowanceConnection = {
    edges: Maybe<Array<Maybe<IPushAllowanceEdge>>>;
    nodes: Maybe<Array<Maybe<IPushAllowance>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IPushAllowanceEdge = {
    cursor: Scalars['String'];
    node: Maybe<IPushAllowance>;
};

export type IQuery = {
    codeOfConduct: Maybe<ICodeOfConduct>;
    codesOfConduct: Maybe<Array<Maybe<ICodeOfConduct>>>;
    enterprise: Maybe<IEnterprise>;
    enterpriseAdministratorInvitation: Maybe<IEnterpriseAdministratorInvitation>;
    enterpriseAdministratorInvitationByToken: Maybe<IEnterpriseAdministratorInvitation>;
    license: Maybe<ILicense>;
    licenses: Array<Maybe<ILicense>>;
    marketplaceCategories: Array<IMarketplaceCategory>;
    marketplaceCategory: Maybe<IMarketplaceCategory>;
    marketplaceListing: Maybe<IMarketplaceListing>;
    marketplaceListings: IMarketplaceListingConnection;
    meta: IGitHubMetadata;
    node: Maybe<INode>;
    nodes: Array<Maybe<INode>>;
    organization: Maybe<IOrganization>;
    rateLimit: Maybe<IRateLimit>;
    relay: IQuery;
    repository: Maybe<IRepository>;
    repositoryOwner: Maybe<IRepositoryOwner>;
    resource: Maybe<IUniformResourceLocatable>;
    search: ISearchResultItemConnection;
    securityAdvisories: ISecurityAdvisoryConnection;
    securityAdvisory: Maybe<ISecurityAdvisory>;
    securityVulnerabilities: ISecurityVulnerabilityConnection;
    sponsorsListing: Maybe<ISponsorsListing>;
    topic: Maybe<ITopic>;
    user: Maybe<IUser>;
    viewer: IUser;
};

export type IQueryCodeOfConductArgs = {
    key: Scalars['String'];
};

export type IQueryEnterpriseArgs = {
    slug: Scalars['String'];
    invitationToken: Maybe<Scalars['String']>;
};

export type IQueryEnterpriseAdministratorInvitationArgs = {
    userLogin: Scalars['String'];
    enterpriseSlug: Scalars['String'];
    role: EnterpriseAdministratorRole;
};

export type IQueryEnterpriseAdministratorInvitationByTokenArgs = {
    invitationToken: Scalars['String'];
};

export type IQueryLicenseArgs = {
    key: Scalars['String'];
};

export type IQueryMarketplaceCategoriesArgs = {
    includeCategories: Maybe<Array<Scalars['String']>>;
    excludeEmpty: Maybe<Scalars['Boolean']>;
    excludeSubcategories: Maybe<Scalars['Boolean']>;
};

export type IQueryMarketplaceCategoryArgs = {
    slug: Scalars['String'];
    useTopicAliases: Maybe<Scalars['Boolean']>;
};

export type IQueryMarketplaceListingArgs = {
    slug: Scalars['String'];
};

export type IQueryMarketplaceListingsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    categorySlug: Maybe<Scalars['String']>;
    useTopicAliases: Maybe<Scalars['Boolean']>;
    viewerCanAdmin: Maybe<Scalars['Boolean']>;
    adminId: Maybe<Scalars['ID']>;
    organizationId: Maybe<Scalars['ID']>;
    allStates: Maybe<Scalars['Boolean']>;
    slugs: Maybe<Array<Maybe<Scalars['String']>>>;
    primaryCategoryOnly?: Maybe<Scalars['Boolean']>;
    withFreeTrialsOnly?: Maybe<Scalars['Boolean']>;
};

export type IQueryNodeArgs = {
    id: Scalars['ID'];
};

export type IQueryNodesArgs = {
    ids: Array<Scalars['ID']>;
};

export type IQueryOrganizationArgs = {
    login: Scalars['String'];
};

export type IQueryRateLimitArgs = {
    dryRun?: Maybe<Scalars['Boolean']>;
};

export type IQueryRepositoryArgs = {
    owner: Scalars['String'];
    name: Scalars['String'];
};

export type IQueryRepositoryOwnerArgs = {
    login: Scalars['String'];
};

export type IQueryResourceArgs = {
    url: Scalars['URI'];
};

export type IQuerySearchArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Scalars['String'];
    type: SearchType;
};

export type IQuerySecurityAdvisoriesArgs = {
    orderBy?: Maybe<ISecurityAdvisoryOrder>;
    identifier: Maybe<ISecurityAdvisoryIdentifierFilter>;
    publishedSince: Maybe<Scalars['DateTime']>;
    updatedSince: Maybe<Scalars['DateTime']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IQuerySecurityAdvisoryArgs = {
    ghsaId: Scalars['String'];
};

export type IQuerySecurityVulnerabilitiesArgs = {
    orderBy?: Maybe<ISecurityVulnerabilityOrder>;
    ecosystem: Maybe<SecurityAdvisoryEcosystem>;
    package: Maybe<Scalars['String']>;
    severities: Maybe<Array<SecurityAdvisorySeverity>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IQuerySponsorsListingArgs = {
    slug: Scalars['String'];
};

export type IQueryTopicArgs = {
    name: Scalars['String'];
};

export type IQueryUserArgs = {
    login: Scalars['String'];
};

export type IRateLimit = {
    cost: Scalars['Int'];
    limit: Scalars['Int'];
    nodeCount: Scalars['Int'];
    remaining: Scalars['Int'];
    resetAt: Scalars['DateTime'];
};

export type IReactable = {
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    reactionGroups: Maybe<Array<IReactionGroup>>;
    reactions: IReactionConnection;
    viewerCanReact: Scalars['Boolean'];
};

export type IReactableReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type IReactingUserConnection = {
    edges: Maybe<Array<Maybe<IReactingUserEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IReactingUserEdge = {
    cursor: Scalars['String'];
    node: IUser;
    reactedAt: Scalars['DateTime'];
};

export type IReaction = INode & {
    content: ReactionContent;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    reactable: IReactable;
    user: Maybe<IUser>;
};

export type IReactionConnection = {
    edges: Maybe<Array<Maybe<IReactionEdge>>>;
    nodes: Maybe<Array<Maybe<IReaction>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    viewerHasReacted: Scalars['Boolean'];
};

export enum ReactionContent {
    ThumbsUp = 'THUMBS_UP',
    ThumbsDown = 'THUMBS_DOWN',
    Laugh = 'LAUGH',
    Hooray = 'HOORAY',
    Confused = 'CONFUSED',
    Heart = 'HEART',
    Rocket = 'ROCKET',
    Eyes = 'EYES',
}

export type IReactionEdge = {
    cursor: Scalars['String'];
    node: Maybe<IReaction>;
};

export type IReactionGroup = {
    content: ReactionContent;
    createdAt: Maybe<Scalars['DateTime']>;
    subject: IReactable;
    users: IReactingUserConnection;
    viewerHasReacted: Scalars['Boolean'];
};

export type IReactionGroupUsersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IReactionOrder = {
    field: ReactionOrderField;
    direction: OrderDirection;
};

export enum ReactionOrderField {
    CreatedAt = 'CREATED_AT',
}

export type IReadyForReviewEvent = INode &
    IUniformResourceLocatable & {
        actor: Maybe<IActor>;
        createdAt: Scalars['DateTime'];
        id: Scalars['ID'];
        pullRequest: IPullRequest;
        resourcePath: Scalars['URI'];
        url: Scalars['URI'];
    };

export type IRef = INode & {
    associatedPullRequests: IPullRequestConnection;
    id: Scalars['ID'];
    name: Scalars['String'];
    prefix: Scalars['String'];
    repository: IRepository;
    target: IGitObject;
};

export type IRefAssociatedPullRequestsArgs = {
    states: Maybe<Array<PullRequestState>>;
    labels: Maybe<Array<Scalars['String']>>;
    headRefName: Maybe<Scalars['String']>;
    baseRefName: Maybe<Scalars['String']>;
    orderBy: Maybe<IIssueOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRefConnection = {
    edges: Maybe<Array<Maybe<IRefEdge>>>;
    nodes: Maybe<Array<Maybe<IRef>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRefEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRef>;
};

export type IReferencedEvent = INode & {
    actor: Maybe<IActor>;
    commit: Maybe<ICommit>;
    commitRepository: IRepository;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    isCrossRepository: Scalars['Boolean'];
    isDirectReference: Scalars['Boolean'];
    subject: IReferencedSubject;
};

export type IReferencedSubject = IIssue | IPullRequest;

export type IRefOrder = {
    field: RefOrderField;
    direction: OrderDirection;
};

export enum RefOrderField {
    TagCommitDate = 'TAG_COMMIT_DATE',
    Alphabetical = 'ALPHABETICAL',
}

export type IRegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
    enterpriseId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    identityProvider: Maybe<IEnterpriseIdentityProvider>;
};

export type IRegistryPackage = INode & {
    color: Scalars['String'];
    id: Scalars['ID'];
    latestVersion: Maybe<IRegistryPackageVersion>;
    name: Scalars['String'];
    nameWithOwner: Scalars['String'];
    packageFileByGuid: Maybe<IRegistryPackageFile>;
    packageFileBySha256: Maybe<IRegistryPackageFile>;
    packageType: RegistryPackageType;
    preReleaseVersions: Maybe<IRegistryPackageVersionConnection>;
    registryPackageType: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
    statistics: Maybe<IRegistryPackageStatistics>;
    tags: IRegistryPackageTagConnection;
    topics: Maybe<ITopicConnection>;
    version: Maybe<IRegistryPackageVersion>;
    versionByPlatform: Maybe<IRegistryPackageVersion>;
    versionBySha256: Maybe<IRegistryPackageVersion>;
    versions: IRegistryPackageVersionConnection;
    versionsByMetadatum: Maybe<IRegistryPackageVersionConnection>;
};

export type IRegistryPackagePackageFileByGuidArgs = {
    guid: Scalars['String'];
};

export type IRegistryPackagePackageFileBySha256Args = {
    sha256: Scalars['String'];
};

export type IRegistryPackagePreReleaseVersionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageTagsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageTopicsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageVersionArgs = {
    version: Scalars['String'];
};

export type IRegistryPackageVersionByPlatformArgs = {
    version: Scalars['String'];
    platform: Scalars['String'];
};

export type IRegistryPackageVersionBySha256Args = {
    sha256: Scalars['String'];
};

export type IRegistryPackageVersionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageVersionsByMetadatumArgs = {
    metadatum: IRegistryPackageMetadatum;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageConnection = {
    edges: Maybe<Array<Maybe<IRegistryPackageEdge>>>;
    nodes: Maybe<Array<Maybe<IRegistryPackage>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRegistryPackageDependency = INode & {
    dependencyType: RegistryPackageDependencyType;
    id: Scalars['ID'];
    name: Scalars['String'];
    version: Scalars['String'];
};

export type IRegistryPackageDependencyConnection = {
    edges: Maybe<Array<Maybe<IRegistryPackageDependencyEdge>>>;
    nodes: Maybe<Array<Maybe<IRegistryPackageDependency>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRegistryPackageDependencyEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRegistryPackageDependency>;
};

export enum RegistryPackageDependencyType {
    Default = 'DEFAULT',
    Dev = 'DEV',
    Test = 'TEST',
    Peer = 'PEER',
    Optional = 'OPTIONAL',
    Bundled = 'BUNDLED',
}

export type IRegistryPackageEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRegistryPackage>;
};

export type IRegistryPackageFile = INode & {
    guid: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    md5: Maybe<Scalars['String']>;
    metadataUrl: Scalars['URI'];
    name: Scalars['String'];
    packageVersion: IRegistryPackageVersion;
    sha1: Maybe<Scalars['String']>;
    sha256: Maybe<Scalars['String']>;
    size: Maybe<Scalars['Int']>;
    updatedAt: Scalars['DateTime'];
    url: Scalars['URI'];
};

export type IRegistryPackageFileConnection = {
    edges: Maybe<Array<Maybe<IRegistryPackageFileEdge>>>;
    nodes: Maybe<Array<Maybe<IRegistryPackageFile>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRegistryPackageFileEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRegistryPackageFile>;
};

export enum RegistryPackageFileState {
    New = 'NEW',
    Uploaded = 'UPLOADED',
}

export type IRegistryPackageMetadatum = {
    name: Scalars['String'];
    value: Scalars['String'];
    update: Maybe<Scalars['Boolean']>;
};

export type IRegistryPackageOwner = {
    id: Scalars['ID'];
    registryPackages: IRegistryPackageConnection;
};

export type IRegistryPackageOwnerRegistryPackagesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['String']>;
    names: Maybe<Array<Maybe<Scalars['String']>>>;
    repositoryId: Maybe<Scalars['ID']>;
    packageType: Maybe<RegistryPackageType>;
    registryPackageType: Maybe<Scalars['String']>;
    publicOnly?: Maybe<Scalars['Boolean']>;
};

export type IRegistryPackageSearch = {
    id: Scalars['ID'];
    registryPackagesForQuery: IRegistryPackageConnection;
};

export type IRegistryPackageSearchRegistryPackagesForQueryArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    packageType: Maybe<RegistryPackageType>;
};

export type IRegistryPackageStatistics = {
    downloadsThisMonth: Scalars['Int'];
    downloadsThisWeek: Scalars['Int'];
    downloadsThisYear: Scalars['Int'];
    downloadsToday: Scalars['Int'];
    downloadsTotalCount: Scalars['Int'];
};

export type IRegistryPackageTag = INode & {
    id: Scalars['ID'];
    name: Scalars['String'];
    version: Maybe<IRegistryPackageVersion>;
};

export type IRegistryPackageTagConnection = {
    edges: Maybe<Array<Maybe<IRegistryPackageTagEdge>>>;
    nodes: Maybe<Array<Maybe<IRegistryPackageTag>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRegistryPackageTagEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRegistryPackageTag>;
};

export enum RegistryPackageType {
    Npm = 'NPM',
    Rubygems = 'RUBYGEMS',
    Maven = 'MAVEN',
    Docker = 'DOCKER',
    Debian = 'DEBIAN',
    Nuget = 'NUGET',
    Python = 'PYTHON',
}

export type IRegistryPackageVersion = INode & {
    dependencies: IRegistryPackageDependencyConnection;
    fileByName: Maybe<IRegistryPackageFile>;
    files: IRegistryPackageFileConnection;
    id: Scalars['ID'];
    installationCommand: Maybe<Scalars['String']>;
    manifest: Maybe<Scalars['String']>;
    platform: Maybe<Scalars['String']>;
    preRelease: Scalars['Boolean'];
    readme: Maybe<Scalars['String']>;
    readmeHtml: Maybe<Scalars['HTML']>;
    registryPackage: Maybe<IRegistryPackage>;
    release: Maybe<IRelease>;
    sha256: Maybe<Scalars['String']>;
    size: Maybe<Scalars['Int']>;
    statistics: Maybe<IRegistryPackageVersionStatistics>;
    summary: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    version: Scalars['String'];
    viewerCanEdit: Scalars['Boolean'];
};

export type IRegistryPackageVersionDependenciesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    type: Maybe<RegistryPackageDependencyType>;
};

export type IRegistryPackageVersionFileByNameArgs = {
    filename: Scalars['String'];
};

export type IRegistryPackageVersionFilesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRegistryPackageVersionConnection = {
    edges: Maybe<Array<Maybe<IRegistryPackageVersionEdge>>>;
    nodes: Maybe<Array<Maybe<IRegistryPackageVersion>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRegistryPackageVersionEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRegistryPackageVersion>;
};

export type IRegistryPackageVersionStatistics = {
    downloadsThisMonth: Scalars['Int'];
    downloadsThisWeek: Scalars['Int'];
    downloadsThisYear: Scalars['Int'];
    downloadsToday: Scalars['Int'];
    downloadsTotalCount: Scalars['Int'];
};

export type IRelease = INode &
    IUniformResourceLocatable & {
        author: Maybe<IUser>;
        createdAt: Scalars['DateTime'];
        description: Maybe<Scalars['String']>;
        descriptionHTML: Maybe<Scalars['HTML']>;
        id: Scalars['ID'];
        isDraft: Scalars['Boolean'];
        isPrerelease: Scalars['Boolean'];
        name: Maybe<Scalars['String']>;
        publishedAt: Maybe<Scalars['DateTime']>;
        releaseAssets: IReleaseAssetConnection;
        resourcePath: Scalars['URI'];
        shortDescriptionHTML: Maybe<Scalars['HTML']>;
        tag: Maybe<IRef>;
        tagName: Scalars['String'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
    };

export type IReleaseReleaseAssetsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['String']>;
};

export type IReleaseShortDescriptionHtmlArgs = {
    limit?: Maybe<Scalars['Int']>;
};

export type IReleaseAsset = INode & {
    contentType: Scalars['String'];
    createdAt: Scalars['DateTime'];
    downloadCount: Scalars['Int'];
    downloadUrl: Scalars['URI'];
    id: Scalars['ID'];
    name: Scalars['String'];
    release: Maybe<IRelease>;
    size: Scalars['Int'];
    updatedAt: Scalars['DateTime'];
    uploadedBy: IUser;
    url: Scalars['URI'];
};

export type IReleaseAssetConnection = {
    edges: Maybe<Array<Maybe<IReleaseAssetEdge>>>;
    nodes: Maybe<Array<Maybe<IReleaseAsset>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IReleaseAssetEdge = {
    cursor: Scalars['String'];
    node: Maybe<IReleaseAsset>;
};

export type IReleaseConnection = {
    edges: Maybe<Array<Maybe<IReleaseEdge>>>;
    nodes: Maybe<Array<Maybe<IRelease>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IReleaseEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRelease>;
};

export type IReleaseOrder = {
    field: ReleaseOrderField;
    direction: OrderDirection;
};

export enum ReleaseOrderField {
    CreatedAt = 'CREATED_AT',
    Name = 'NAME',
}

export type IRemoveAssigneesFromAssignableInput = {
    assignableId: Scalars['ID'];
    assigneeIds: Array<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveAssigneesFromAssignablePayload = {
    assignable: Maybe<IAssignable>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemovedFromProjectEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
};

export type IRemoveEnterpriseAdminInput = {
    enterpriseId: Scalars['ID'];
    login: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveEnterpriseAdminPayload = {
    admin: Maybe<IUser>;
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
    viewer: Maybe<IUser>;
};

export type IRemoveEnterpriseOrganizationInput = {
    enterpriseId: Scalars['ID'];
    organizationId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveEnterpriseOrganizationPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    organization: Maybe<IOrganization>;
    viewer: Maybe<IUser>;
};

export type IRemoveLabelsFromLabelableInput = {
    labelableId: Scalars['ID'];
    labelIds: Array<Scalars['ID']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveLabelsFromLabelablePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    labelable: Maybe<ILabelable>;
};

export type IRemoveOutsideCollaboratorInput = {
    userId: Scalars['ID'];
    organizationId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveOutsideCollaboratorPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    removedUser: Maybe<IUser>;
};

export type IRemoveReactionInput = {
    subjectId: Scalars['ID'];
    content: ReactionContent;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveReactionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    reaction: Maybe<IReaction>;
    subject: Maybe<IReactable>;
};

export type IRemoveStarInput = {
    starrableId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRemoveStarPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    starrable: Maybe<IStarrable>;
};

export type IRenamedTitleEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    currentTitle: Scalars['String'];
    id: Scalars['ID'];
    previousTitle: Scalars['String'];
    subject: IRenamedTitleSubject;
};

export type IRenamedTitleSubject = IIssue | IPullRequest;

export type IReopenedEvent = INode & {
    actor: Maybe<IActor>;
    closable: IClosable;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
};

export type IReopenIssueInput = {
    issueId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IReopenIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    issue: Maybe<IIssue>;
};

export type IReopenPullRequestInput = {
    pullRequestId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IReopenPullRequestPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
};

export type IRepoAccessAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoAccessAuditEntryVisibility>;
    };

export enum RepoAccessAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoAddMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoAddMemberAuditEntryVisibility>;
    };

export enum RepoAddMemberAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoAddTopicAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData &
    ITopicAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        topic: Maybe<ITopic>;
        topicName: Maybe<Scalars['String']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoArchivedAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoArchivedAuditEntryVisibility>;
    };

export enum RepoArchivedAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoChangeMergeSettingAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isEnabled: Maybe<Scalars['Boolean']>;
        mergeType: Maybe<RepoChangeMergeSettingAuditEntryMergeType>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum RepoChangeMergeSettingAuditEntryMergeType {
    Merge = 'MERGE',
    Rebase = 'REBASE',
    Squash = 'SQUASH',
}

export type IRepoConfigDisableAnonymousGitAccessAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigDisableCollaboratorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigDisableContributorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigDisableSockpuppetDisallowedAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigEnableAnonymousGitAccessAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigEnableCollaboratorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigEnableContributorsOnlyAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigEnableSockpuppetDisallowedAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigLockAnonymousGitAccessAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoConfigUnlockAnonymousGitAccessAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepoCreateAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        forkParentName: Maybe<Scalars['String']>;
        forkSourceName: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoCreateAuditEntryVisibility>;
    };

export enum RepoCreateAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoDestroyAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoDestroyAuditEntryVisibility>;
    };

export enum RepoDestroyAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoRemoveMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
        visibility: Maybe<RepoRemoveMemberAuditEntryVisibility>;
    };

export enum RepoRemoveMemberAuditEntryVisibility {
    Internal = 'INTERNAL',
    Private = 'PRIVATE',
    Public = 'PUBLIC',
}

export type IRepoRemoveTopicAuditEntry = INode &
    IAuditEntry &
    IRepositoryAuditEntryData &
    IOrganizationAuditEntryData &
    ITopicAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        topic: Maybe<ITopic>;
        topicName: Maybe<Scalars['String']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export enum ReportedContentClassifiers {
    Spam = 'SPAM',
    Abuse = 'ABUSE',
    OffTopic = 'OFF_TOPIC',
    Outdated = 'OUTDATED',
    Duplicate = 'DUPLICATE',
    Resolved = 'RESOLVED',
}

export type IRepository = INode &
    IProjectOwner &
    IRegistryPackageOwner &
    IRegistryPackageSearch &
    ISubscribable &
    IStarrable &
    IUniformResourceLocatable &
    IRepositoryInfo & {
        assignableUsers: IUserConnection;
        branchProtectionRules: IBranchProtectionRuleConnection;
        codeOfConduct: Maybe<ICodeOfConduct>;
        collaborators: Maybe<IRepositoryCollaboratorConnection>;
        commitComments: ICommitCommentConnection;
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        defaultBranchRef: Maybe<IRef>;
        deleteBranchOnMerge: Scalars['Boolean'];
        deployKeys: IDeployKeyConnection;
        deployments: IDeploymentConnection;
        description: Maybe<Scalars['String']>;
        descriptionHTML: Scalars['HTML'];
        diskUsage: Maybe<Scalars['Int']>;
        forkCount: Scalars['Int'];
        forks: IRepositoryConnection;
        fundingLinks: Array<IFundingLink>;
        hasIssuesEnabled: Scalars['Boolean'];
        hasProjectsEnabled: Scalars['Boolean'];
        hasWikiEnabled: Scalars['Boolean'];
        homepageUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        isArchived: Scalars['Boolean'];
        isDisabled: Scalars['Boolean'];
        isFork: Scalars['Boolean'];
        isLocked: Scalars['Boolean'];
        isMirror: Scalars['Boolean'];
        isPrivate: Scalars['Boolean'];
        isTemplate: Scalars['Boolean'];
        issue: Maybe<IIssue>;
        issueOrPullRequest: Maybe<IIssueOrPullRequest>;
        issues: IIssueConnection;
        label: Maybe<ILabel>;
        labels: Maybe<ILabelConnection>;
        languages: Maybe<ILanguageConnection>;
        licenseInfo: Maybe<ILicense>;
        lockReason: Maybe<RepositoryLockReason>;
        mentionableUsers: IUserConnection;
        mergeCommitAllowed: Scalars['Boolean'];
        milestone: Maybe<IMilestone>;
        milestones: Maybe<IMilestoneConnection>;
        mirrorUrl: Maybe<Scalars['URI']>;
        name: Scalars['String'];
        nameWithOwner: Scalars['String'];
        object: Maybe<IGitObject>;
        openGraphImageUrl: Scalars['URI'];
        owner: IRepositoryOwner;
        parent: Maybe<IRepository>;
        primaryLanguage: Maybe<ILanguage>;
        project: Maybe<IProject>;
        projects: IProjectConnection;
        projectsResourcePath: Scalars['URI'];
        projectsUrl: Scalars['URI'];
        pullRequest: Maybe<IPullRequest>;
        pullRequests: IPullRequestConnection;
        pushedAt: Maybe<Scalars['DateTime']>;
        rebaseMergeAllowed: Scalars['Boolean'];
        ref: Maybe<IRef>;
        refs: Maybe<IRefConnection>;
        registryPackages: IRegistryPackageConnection;
        registryPackagesForQuery: IRegistryPackageConnection;
        release: Maybe<IRelease>;
        releases: IReleaseConnection;
        repositoryTopics: IRepositoryTopicConnection;
        resourcePath: Scalars['URI'];
        shortDescriptionHTML: Scalars['HTML'];
        squashMergeAllowed: Scalars['Boolean'];
        sshUrl: Scalars['GitSSHRemote'];
        stargazers: IStargazerConnection;
        tempCloneToken: Maybe<Scalars['String']>;
        templateRepository: Maybe<IRepository>;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        usesCustomOpenGraphImage: Scalars['Boolean'];
        viewerCanAdminister: Scalars['Boolean'];
        viewerCanCreateProjects: Scalars['Boolean'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerCanUpdateTopics: Scalars['Boolean'];
        viewerHasStarred: Scalars['Boolean'];
        viewerPermission: Maybe<RepositoryPermission>;
        viewerSubscription: Maybe<SubscriptionState>;
        vulnerabilityAlerts: Maybe<IRepositoryVulnerabilityAlertConnection>;
        watchers: IUserConnection;
    };

export type IRepositoryAssignableUsersArgs = {
    query: Maybe<Scalars['String']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryBranchProtectionRulesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryCollaboratorsArgs = {
    affiliation: Maybe<CollaboratorAffiliation>;
    query: Maybe<Scalars['String']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryCommitCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryDeployKeysArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryDeploymentsArgs = {
    environments: Maybe<Array<Scalars['String']>>;
    orderBy?: Maybe<IDeploymentOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryForksArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryIssueArgs = {
    number: Scalars['Int'];
};

export type IRepositoryIssueOrPullRequestArgs = {
    number: Scalars['Int'];
};

export type IRepositoryIssuesArgs = {
    orderBy: Maybe<IIssueOrder>;
    labels: Maybe<Array<Scalars['String']>>;
    states: Maybe<Array<IssueState>>;
    filterBy: Maybe<IIssueFilters>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryLabelArgs = {
    name: Scalars['String'];
};

export type IRepositoryLabelsArgs = {
    orderBy?: Maybe<ILabelOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
};

export type IRepositoryLanguagesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<ILanguageOrder>;
};

export type IRepositoryMentionableUsersArgs = {
    query: Maybe<Scalars['String']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryMilestoneArgs = {
    number: Scalars['Int'];
};

export type IRepositoryMilestonesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    states: Maybe<Array<MilestoneState>>;
    orderBy: Maybe<IMilestoneOrder>;
};

export type IRepositoryObjectArgs = {
    oid: Maybe<Scalars['GitObjectID']>;
    expression: Maybe<Scalars['String']>;
};

export type IRepositoryProjectArgs = {
    number: Scalars['Int'];
};

export type IRepositoryProjectsArgs = {
    orderBy: Maybe<IProjectOrder>;
    search: Maybe<Scalars['String']>;
    states: Maybe<Array<ProjectState>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryPullRequestArgs = {
    number: Scalars['Int'];
};

export type IRepositoryPullRequestsArgs = {
    states: Maybe<Array<PullRequestState>>;
    labels: Maybe<Array<Scalars['String']>>;
    headRefName: Maybe<Scalars['String']>;
    baseRefName: Maybe<Scalars['String']>;
    orderBy: Maybe<IIssueOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryRefArgs = {
    qualifiedName: Scalars['String'];
};

export type IRepositoryRefsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    refPrefix: Scalars['String'];
    direction: Maybe<OrderDirection>;
    orderBy: Maybe<IRefOrder>;
};

export type IRepositoryRegistryPackagesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['String']>;
    names: Maybe<Array<Maybe<Scalars['String']>>>;
    repositoryId: Maybe<Scalars['ID']>;
    packageType: Maybe<RegistryPackageType>;
    registryPackageType: Maybe<Scalars['String']>;
    publicOnly?: Maybe<Scalars['Boolean']>;
};

export type IRepositoryRegistryPackagesForQueryArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    packageType: Maybe<RegistryPackageType>;
};

export type IRepositoryReleaseArgs = {
    tagName: Scalars['String'];
};

export type IRepositoryReleasesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IReleaseOrder>;
};

export type IRepositoryRepositoryTopicsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryShortDescriptionHtmlArgs = {
    limit?: Maybe<Scalars['Int']>;
};

export type IRepositoryStargazersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IStarOrder>;
};

export type IRepositoryVulnerabilityAlertsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryWatchersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export enum RepositoryAffiliation {
    Owner = 'OWNER',
    Collaborator = 'COLLABORATOR',
    OrganizationMember = 'ORGANIZATION_MEMBER',
}

export type IRepositoryAuditEntryData = {
    repository: Maybe<IRepository>;
    repositoryName: Maybe<Scalars['String']>;
    repositoryResourcePath: Maybe<Scalars['URI']>;
    repositoryUrl: Maybe<Scalars['URI']>;
};

export enum RepositoryCollaboratorAffiliation {
    All = 'ALL',
    Outside = 'OUTSIDE',
}

export type IRepositoryCollaboratorConnection = {
    edges: Maybe<Array<Maybe<IRepositoryCollaboratorEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRepositoryCollaboratorEdge = {
    cursor: Scalars['String'];
    node: IUser;
    permission: RepositoryPermission;
    permissionSources: Maybe<Array<IPermissionSource>>;
};

export type IRepositoryConnection = {
    edges: Maybe<Array<Maybe<IRepositoryEdge>>>;
    nodes: Maybe<Array<Maybe<IRepository>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
    totalDiskUsage: Scalars['Int'];
};

export enum RepositoryContributionType {
    Commit = 'COMMIT',
    Issue = 'ISSUE',
    PullRequest = 'PULL_REQUEST',
    Repository = 'REPOSITORY',
    PullRequestReview = 'PULL_REQUEST_REVIEW',
}

export type IRepositoryEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRepository>;
};

export type IRepositoryInfo = {
    createdAt: Scalars['DateTime'];
    description: Maybe<Scalars['String']>;
    descriptionHTML: Scalars['HTML'];
    forkCount: Scalars['Int'];
    hasIssuesEnabled: Scalars['Boolean'];
    hasProjectsEnabled: Scalars['Boolean'];
    hasWikiEnabled: Scalars['Boolean'];
    homepageUrl: Maybe<Scalars['URI']>;
    isArchived: Scalars['Boolean'];
    isFork: Scalars['Boolean'];
    isLocked: Scalars['Boolean'];
    isMirror: Scalars['Boolean'];
    isPrivate: Scalars['Boolean'];
    isTemplate: Scalars['Boolean'];
    licenseInfo: Maybe<ILicense>;
    lockReason: Maybe<RepositoryLockReason>;
    mirrorUrl: Maybe<Scalars['URI']>;
    name: Scalars['String'];
    nameWithOwner: Scalars['String'];
    openGraphImageUrl: Scalars['URI'];
    owner: IRepositoryOwner;
    pushedAt: Maybe<Scalars['DateTime']>;
    resourcePath: Scalars['URI'];
    shortDescriptionHTML: Scalars['HTML'];
    updatedAt: Scalars['DateTime'];
    url: Scalars['URI'];
    usesCustomOpenGraphImage: Scalars['Boolean'];
};

export type IRepositoryInfoShortDescriptionHtmlArgs = {
    limit?: Maybe<Scalars['Int']>;
};

export type IRepositoryInvitation = INode & {
    id: Scalars['ID'];
    invitee: IUser;
    inviter: IUser;
    permission: RepositoryPermission;
    repository: Maybe<IRepositoryInfo>;
};

export type IRepositoryInvitationEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRepositoryInvitation>;
};

export type IRepositoryInvitationOrder = {
    field: RepositoryInvitationOrderField;
    direction: OrderDirection;
};

export enum RepositoryInvitationOrderField {
    CreatedAt = 'CREATED_AT',
    InviteeLogin = 'INVITEE_LOGIN',
}

export enum RepositoryLockReason {
    Moving = 'MOVING',
    Billing = 'BILLING',
    Rename = 'RENAME',
    Migrating = 'MIGRATING',
}

export type IRepositoryNode = {
    repository: IRepository;
};

export type IRepositoryOrder = {
    field: RepositoryOrderField;
    direction: OrderDirection;
};

export enum RepositoryOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    PushedAt = 'PUSHED_AT',
    Name = 'NAME',
    Stargazers = 'STARGAZERS',
}

export type IRepositoryOwner = {
    avatarUrl: Scalars['URI'];
    id: Scalars['ID'];
    login: Scalars['String'];
    pinnedRepositories: IRepositoryConnection;
    repositories: IRepositoryConnection;
    repository: Maybe<IRepository>;
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
};

export type IRepositoryOwnerAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IRepositoryOwnerPinnedRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IRepositoryOwnerRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    isFork: Maybe<Scalars['Boolean']>;
};

export type IRepositoryOwnerRepositoryArgs = {
    name: Scalars['String'];
};

export enum RepositoryPermission {
    Admin = 'ADMIN',
    Maintain = 'MAINTAIN',
    Write = 'WRITE',
    Triage = 'TRIAGE',
    Read = 'READ',
}

export enum RepositoryPrivacy {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

export type IRepositoryTopic = INode &
    IUniformResourceLocatable & {
        id: Scalars['ID'];
        resourcePath: Scalars['URI'];
        topic: ITopic;
        url: Scalars['URI'];
    };

export type IRepositoryTopicConnection = {
    edges: Maybe<Array<Maybe<IRepositoryTopicEdge>>>;
    nodes: Maybe<Array<Maybe<IRepositoryTopic>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRepositoryTopicEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRepositoryTopic>;
};

export enum RepositoryVisibility {
    Private = 'PRIVATE',
    Public = 'PUBLIC',
    Internal = 'INTERNAL',
}

export type IRepositoryVisibilityChangeDisableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepositoryVisibilityChangeEnableAuditEntry = INode &
    IAuditEntry &
    IEnterpriseAuditEntryData &
    IOrganizationAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        enterpriseResourcePath: Maybe<Scalars['URI']>;
        enterpriseSlug: Maybe<Scalars['String']>;
        enterpriseUrl: Maybe<Scalars['URI']>;
        id: Scalars['ID'];
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type IRepositoryVulnerabilityAlert = INode &
    IRepositoryNode & {
        affectedRange: Scalars['String'];
        createdAt: Scalars['DateTime'];
        dismissReason: Maybe<Scalars['String']>;
        dismissedAt: Maybe<Scalars['DateTime']>;
        dismisser: Maybe<IUser>;
        externalIdentifier: Maybe<Scalars['String']>;
        externalReference: Scalars['String'];
        fixedIn: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        packageName: Scalars['String'];
        repository: IRepository;
        securityAdvisory: Maybe<ISecurityAdvisory>;
        securityVulnerability: Maybe<ISecurityVulnerability>;
        vulnerableManifestFilename: Scalars['String'];
        vulnerableManifestPath: Scalars['String'];
        vulnerableRequirements: Maybe<Scalars['String']>;
    };

export type IRepositoryVulnerabilityAlertConnection = {
    edges: Maybe<Array<Maybe<IRepositoryVulnerabilityAlertEdge>>>;
    nodes: Maybe<Array<Maybe<IRepositoryVulnerabilityAlert>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IRepositoryVulnerabilityAlertEdge = {
    cursor: Scalars['String'];
    node: Maybe<IRepositoryVulnerabilityAlert>;
};

export type IRequestedReviewer = IMannequin | ITeam | IUser;

export type IRequestReviewsInput = {
    pullRequestId: Scalars['ID'];
    userIds: Maybe<Array<Scalars['ID']>>;
    teamIds: Maybe<Array<Scalars['ID']>>;
    union: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IRequestReviewsPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
    requestedReviewersEdge: Maybe<IUserEdge>;
};

export type IResolveReviewThreadInput = {
    threadId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IResolveReviewThreadPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    thread: Maybe<IPullRequestReviewThread>;
};

export type IRestrictedContribution = IContribution & {
    isRestricted: Scalars['Boolean'];
    occurredAt: Scalars['DateTime'];
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
    user: IUser;
};

export type IReviewDismissalAllowance = INode & {
    actor: Maybe<IReviewDismissalAllowanceActor>;
    branchProtectionRule: Maybe<IBranchProtectionRule>;
    id: Scalars['ID'];
};

export type IReviewDismissalAllowanceActor = ITeam | IUser;

export type IReviewDismissalAllowanceConnection = {
    edges: Maybe<Array<Maybe<IReviewDismissalAllowanceEdge>>>;
    nodes: Maybe<Array<Maybe<IReviewDismissalAllowance>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IReviewDismissalAllowanceEdge = {
    cursor: Scalars['String'];
    node: Maybe<IReviewDismissalAllowance>;
};

export type IReviewDismissedEvent = INode &
    IUniformResourceLocatable & {
        actor: Maybe<IActor>;
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        dismissalMessage: Maybe<Scalars['String']>;
        dismissalMessageHTML: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        previousReviewState: PullRequestReviewState;
        pullRequest: IPullRequest;
        pullRequestCommit: Maybe<IPullRequestCommit>;
        resourcePath: Scalars['URI'];
        review: Maybe<IPullRequestReview>;
        url: Scalars['URI'];
    };

export type IReviewRequest = INode & {
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    requestedReviewer: Maybe<IRequestedReviewer>;
};

export type IReviewRequestConnection = {
    edges: Maybe<Array<Maybe<IReviewRequestEdge>>>;
    nodes: Maybe<Array<Maybe<IReviewRequest>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IReviewRequestedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    requestedReviewer: Maybe<IRequestedReviewer>;
};

export type IReviewRequestEdge = {
    cursor: Scalars['String'];
    node: Maybe<IReviewRequest>;
};

export type IReviewRequestRemovedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    pullRequest: IPullRequest;
    requestedReviewer: Maybe<IRequestedReviewer>;
};

export type IReviewStatusHovercardContext = IHovercardContext & {
    message: Scalars['String'];
    octicon: Scalars['String'];
};

export enum SamlDigestAlgorithm {
    Sha1 = 'SHA1',
    Sha256 = 'SHA256',
    Sha384 = 'SHA384',
    Sha512 = 'SHA512',
}

export enum SamlSignatureAlgorithm {
    RsaSha1 = 'RSA_SHA1',
    RsaSha256 = 'RSA_SHA256',
    RsaSha384 = 'RSA_SHA384',
    RsaSha512 = 'RSA_SHA512',
}

export type ISavedReply = INode & {
    body: Scalars['String'];
    bodyHTML: Scalars['HTML'];
    databaseId: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    title: Scalars['String'];
    user: Maybe<IActor>;
};

export type ISavedReplyConnection = {
    edges: Maybe<Array<Maybe<ISavedReplyEdge>>>;
    nodes: Maybe<Array<Maybe<ISavedReply>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ISavedReplyEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISavedReply>;
};

export type ISavedReplyOrder = {
    field: SavedReplyOrderField;
    direction: OrderDirection;
};

export enum SavedReplyOrderField {
    UpdatedAt = 'UPDATED_AT',
}

export type ISearchResultItem =
    | IApp
    | IIssue
    | IMarketplaceListing
    | IOrganization
    | IPullRequest
    | IRepository
    | IUser;

export type ISearchResultItemConnection = {
    codeCount: Scalars['Int'];
    edges: Maybe<Array<Maybe<ISearchResultItemEdge>>>;
    issueCount: Scalars['Int'];
    nodes: Maybe<Array<Maybe<ISearchResultItem>>>;
    pageInfo: IPageInfo;
    repositoryCount: Scalars['Int'];
    userCount: Scalars['Int'];
    wikiCount: Scalars['Int'];
};

export type ISearchResultItemEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISearchResultItem>;
    textMatches: Maybe<Array<Maybe<ITextMatch>>>;
};

export enum SearchType {
    Issue = 'ISSUE',
    Repository = 'REPOSITORY',
    User = 'USER',
}

export type ISecurityAdvisory = INode & {
    databaseId: Maybe<Scalars['Int']>;
    description: Scalars['String'];
    ghsaId: Scalars['String'];
    id: Scalars['ID'];
    identifiers: Array<ISecurityAdvisoryIdentifier>;
    origin: Scalars['String'];
    publishedAt: Scalars['DateTime'];
    references: Array<ISecurityAdvisoryReference>;
    severity: SecurityAdvisorySeverity;
    summary: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    vulnerabilities: ISecurityVulnerabilityConnection;
    withdrawnAt: Maybe<Scalars['DateTime']>;
};

export type ISecurityAdvisoryVulnerabilitiesArgs = {
    orderBy?: Maybe<ISecurityVulnerabilityOrder>;
    ecosystem: Maybe<SecurityAdvisoryEcosystem>;
    package: Maybe<Scalars['String']>;
    severities: Maybe<Array<SecurityAdvisorySeverity>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ISecurityAdvisoryConnection = {
    edges: Maybe<Array<Maybe<ISecurityAdvisoryEdge>>>;
    nodes: Maybe<Array<Maybe<ISecurityAdvisory>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export enum SecurityAdvisoryEcosystem {
    Rubygems = 'RUBYGEMS',
    Npm = 'NPM',
    Pip = 'PIP',
    Maven = 'MAVEN',
    Nuget = 'NUGET',
    Composer = 'COMPOSER',
}

export type ISecurityAdvisoryEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISecurityAdvisory>;
};

export type ISecurityAdvisoryIdentifier = {
    type: Scalars['String'];
    value: Scalars['String'];
};

export type ISecurityAdvisoryIdentifierFilter = {
    type: SecurityAdvisoryIdentifierType;
    value: Scalars['String'];
};

export enum SecurityAdvisoryIdentifierType {
    Cve = 'CVE',
    Ghsa = 'GHSA',
}

export type ISecurityAdvisoryOrder = {
    field: SecurityAdvisoryOrderField;
    direction: OrderDirection;
};

export enum SecurityAdvisoryOrderField {
    PublishedAt = 'PUBLISHED_AT',
    UpdatedAt = 'UPDATED_AT',
}

export type ISecurityAdvisoryPackage = {
    ecosystem: SecurityAdvisoryEcosystem;
    name: Scalars['String'];
};

export type ISecurityAdvisoryPackageVersion = {
    identifier: Scalars['String'];
};

export type ISecurityAdvisoryReference = {
    url: Scalars['URI'];
};

export enum SecurityAdvisorySeverity {
    Low = 'LOW',
    Moderate = 'MODERATE',
    High = 'HIGH',
    Critical = 'CRITICAL',
}

export type ISecurityVulnerability = {
    advisory: ISecurityAdvisory;
    firstPatchedVersion: Maybe<ISecurityAdvisoryPackageVersion>;
    package: ISecurityAdvisoryPackage;
    severity: SecurityAdvisorySeverity;
    updatedAt: Scalars['DateTime'];
    vulnerableVersionRange: Scalars['String'];
};

export type ISecurityVulnerabilityConnection = {
    edges: Maybe<Array<Maybe<ISecurityVulnerabilityEdge>>>;
    nodes: Maybe<Array<Maybe<ISecurityVulnerability>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ISecurityVulnerabilityEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISecurityVulnerability>;
};

export type ISecurityVulnerabilityOrder = {
    field: SecurityVulnerabilityOrderField;
    direction: OrderDirection;
};

export enum SecurityVulnerabilityOrderField {
    UpdatedAt = 'UPDATED_AT',
}

export type ISmimeSignature = IGitSignature & {
    email: Scalars['String'];
    isValid: Scalars['Boolean'];
    payload: Scalars['String'];
    signature: Scalars['String'];
    signer: Maybe<IUser>;
    state: GitSignatureState;
    wasSignedByGitHub: Scalars['Boolean'];
};

export type ISponsorable = {
    sponsorsListing: Maybe<ISponsorsListing>;
    sponsorshipsAsMaintainer: ISponsorshipConnection;
    sponsorshipsAsSponsor: ISponsorshipConnection;
};

export type ISponsorableSponsorshipsAsMaintainerArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    includePrivate?: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type ISponsorableSponsorshipsAsSponsorArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type ISponsorship = INode & {
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    maintainer: IUser;
    privacyLevel: SponsorshipPrivacy;
    sponsor: Maybe<IUser>;
    sponsorable: ISponsorable;
    tier: Maybe<ISponsorsTier>;
};

export type ISponsorshipConnection = {
    edges: Maybe<Array<Maybe<ISponsorshipEdge>>>;
    nodes: Maybe<Array<Maybe<ISponsorship>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ISponsorshipEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISponsorship>;
};

export type ISponsorshipOrder = {
    field: SponsorshipOrderField;
    direction: OrderDirection;
};

export enum SponsorshipOrderField {
    CreatedAt = 'CREATED_AT',
}

export enum SponsorshipPrivacy {
    Public = 'PUBLIC',
    Private = 'PRIVATE',
}

export type ISponsorsListing = INode & {
    createdAt: Scalars['DateTime'];
    fullDescription: Scalars['String'];
    fullDescriptionHTML: Scalars['HTML'];
    id: Scalars['ID'];
    name: Scalars['String'];
    shortDescription: Scalars['String'];
    slug: Scalars['String'];
    tiers: Maybe<ISponsorsTierConnection>;
};

export type ISponsorsListingTiersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<ISponsorsTierOrder>;
};

export type ISponsorsTier = INode & {
    adminInfo: Maybe<ISponsorsTierAdminInfo>;
    createdAt: Scalars['DateTime'];
    description: Scalars['String'];
    descriptionHTML: Scalars['HTML'];
    id: Scalars['ID'];
    monthlyPriceInCents: Scalars['Int'];
    monthlyPriceInDollars: Scalars['Int'];
    name: Scalars['String'];
    sponsorsListing: ISponsorsListing;
    updatedAt: Scalars['DateTime'];
};

export type ISponsorsTierAdminInfo = {
    sponsorships: ISponsorshipConnection;
};

export type ISponsorsTierAdminInfoSponsorshipsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    includePrivate?: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type ISponsorsTierConnection = {
    edges: Maybe<Array<Maybe<ISponsorsTierEdge>>>;
    nodes: Maybe<Array<Maybe<ISponsorsTier>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ISponsorsTierEdge = {
    cursor: Scalars['String'];
    node: Maybe<ISponsorsTier>;
};

export type ISponsorsTierOrder = {
    field: SponsorsTierOrderField;
    direction: OrderDirection;
};

export enum SponsorsTierOrderField {
    CreatedAt = 'CREATED_AT',
    MonthlyPriceInCents = 'MONTHLY_PRICE_IN_CENTS',
}

export type IStargazerConnection = {
    edges: Maybe<Array<Maybe<IStargazerEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IStargazerEdge = {
    cursor: Scalars['String'];
    node: IUser;
    starredAt: Scalars['DateTime'];
};

export type IStarOrder = {
    field: StarOrderField;
    direction: OrderDirection;
};

export enum StarOrderField {
    StarredAt = 'STARRED_AT',
}

export type IStarrable = {
    id: Scalars['ID'];
    stargazers: IStargazerConnection;
    viewerHasStarred: Scalars['Boolean'];
};

export type IStarrableStargazersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IStarOrder>;
};

export type IStarredRepositoryConnection = {
    edges: Maybe<Array<Maybe<IStarredRepositoryEdge>>>;
    nodes: Maybe<Array<Maybe<IRepository>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IStarredRepositoryEdge = {
    cursor: Scalars['String'];
    node: IRepository;
    starredAt: Scalars['DateTime'];
};

export type IStatus = INode & {
    commit: Maybe<ICommit>;
    context: Maybe<IStatusContext>;
    contexts: Array<IStatusContext>;
    id: Scalars['ID'];
    state: StatusState;
};

export type IStatusContextArgs = {
    name: Scalars['String'];
};

export type IStatusContext = INode & {
    avatarUrl: Maybe<Scalars['URI']>;
    commit: Maybe<ICommit>;
    context: Scalars['String'];
    createdAt: Scalars['DateTime'];
    creator: Maybe<IActor>;
    description: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    state: StatusState;
    targetUrl: Maybe<Scalars['URI']>;
};

export type IStatusContextAvatarUrlArgs = {
    size?: Maybe<Scalars['Int']>;
};

export enum StatusState {
    Expected = 'EXPECTED',
    Error = 'ERROR',
    Failure = 'FAILURE',
    Pending = 'PENDING',
    Success = 'SUCCESS',
}

export type ISubmitPullRequestReviewInput = {
    pullRequestReviewId: Scalars['ID'];
    event: PullRequestReviewEvent;
    body: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type ISubmitPullRequestReviewPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
};

export type ISubscribable = {
    id: Scalars['ID'];
    viewerCanSubscribe: Scalars['Boolean'];
    viewerSubscription: Maybe<SubscriptionState>;
};

export type ISubscribedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    subscribable: ISubscribable;
};

export enum SubscriptionState {
    Unsubscribed = 'UNSUBSCRIBED',
    Subscribed = 'SUBSCRIBED',
    Ignored = 'IGNORED',
}

export type ISuggestedReviewer = {
    isAuthor: Scalars['Boolean'];
    isCommenter: Scalars['Boolean'];
    reviewer: IUser;
};

export type ITag = INode &
    IGitObject & {
        abbreviatedOid: Scalars['String'];
        commitResourcePath: Scalars['URI'];
        commitUrl: Scalars['URI'];
        id: Scalars['ID'];
        message: Maybe<Scalars['String']>;
        name: Scalars['String'];
        oid: Scalars['GitObjectID'];
        repository: IRepository;
        tagger: Maybe<IGitActor>;
        target: IGitObject;
    };

export type ITeam = INode &
    ISubscribable &
    IMemberStatusable & {
        ancestors: ITeamConnection;
        avatarUrl: Maybe<Scalars['URI']>;
        childTeams: ITeamConnection;
        combinedSlug: Scalars['String'];
        createdAt: Scalars['DateTime'];
        description: Maybe<Scalars['String']>;
        discussion: Maybe<ITeamDiscussion>;
        discussions: ITeamDiscussionConnection;
        discussionsResourcePath: Scalars['URI'];
        discussionsUrl: Scalars['URI'];
        editTeamResourcePath: Scalars['URI'];
        editTeamUrl: Scalars['URI'];
        id: Scalars['ID'];
        invitations: Maybe<IOrganizationInvitationConnection>;
        memberStatuses: IUserStatusConnection;
        members: ITeamMemberConnection;
        membersResourcePath: Scalars['URI'];
        membersUrl: Scalars['URI'];
        name: Scalars['String'];
        newTeamResourcePath: Scalars['URI'];
        newTeamUrl: Scalars['URI'];
        organization: IOrganization;
        parentTeam: Maybe<ITeam>;
        privacy: TeamPrivacy;
        repositories: ITeamRepositoryConnection;
        repositoriesResourcePath: Scalars['URI'];
        repositoriesUrl: Scalars['URI'];
        resourcePath: Scalars['URI'];
        slug: Scalars['String'];
        teamsResourcePath: Scalars['URI'];
        teamsUrl: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        viewerCanAdminister: Scalars['Boolean'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerSubscription: Maybe<SubscriptionState>;
    };

export type ITeamAncestorsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ITeamAvatarUrlArgs = {
    size?: Maybe<Scalars['Int']>;
};

export type ITeamChildTeamsArgs = {
    orderBy: Maybe<ITeamOrder>;
    userLogins: Maybe<Array<Scalars['String']>>;
    immediateOnly?: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ITeamDiscussionArgs = {
    number: Scalars['Int'];
};

export type ITeamDiscussionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    isPinned: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<ITeamDiscussionOrder>;
};

export type ITeamInvitationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ITeamMemberStatusesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<IUserStatusOrder>;
};

export type ITeamMembersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    membership?: Maybe<TeamMembershipType>;
    role: Maybe<TeamMemberRole>;
    orderBy: Maybe<ITeamMemberOrder>;
};

export type ITeamRepositoriesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    orderBy: Maybe<ITeamRepositoryOrder>;
};

export type ITeamAddMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    ITeamAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isLdapMapped: Maybe<Scalars['Boolean']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        team: Maybe<ITeam>;
        teamName: Maybe<Scalars['String']>;
        teamResourcePath: Maybe<Scalars['URI']>;
        teamUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type ITeamAddRepositoryAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData &
    ITeamAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isLdapMapped: Maybe<Scalars['Boolean']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        team: Maybe<ITeam>;
        teamName: Maybe<Scalars['String']>;
        teamResourcePath: Maybe<Scalars['URI']>;
        teamUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type ITeamAuditEntryData = {
    team: Maybe<ITeam>;
    teamName: Maybe<Scalars['String']>;
    teamResourcePath: Maybe<Scalars['URI']>;
    teamUrl: Maybe<Scalars['URI']>;
};

export type ITeamChangeParentTeamAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    ITeamAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isLdapMapped: Maybe<Scalars['Boolean']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        parentTeam: Maybe<ITeam>;
        parentTeamName: Maybe<Scalars['String']>;
        parentTeamNameWas: Maybe<Scalars['String']>;
        parentTeamResourcePath: Maybe<Scalars['URI']>;
        parentTeamUrl: Maybe<Scalars['URI']>;
        parentTeamWas: Maybe<ITeam>;
        parentTeamWasResourcePath: Maybe<Scalars['URI']>;
        parentTeamWasUrl: Maybe<Scalars['URI']>;
        team: Maybe<ITeam>;
        teamName: Maybe<Scalars['String']>;
        teamResourcePath: Maybe<Scalars['URI']>;
        teamUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type ITeamConnection = {
    edges: Maybe<Array<Maybe<ITeamEdge>>>;
    nodes: Maybe<Array<Maybe<ITeam>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITeamDiscussion = INode &
    IComment &
    IDeletable &
    IReactable &
    ISubscribable &
    IUniformResourceLocatable &
    IUpdatable &
    IUpdatableComment & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        bodyVersion: Scalars['String'];
        comments: ITeamDiscussionCommentConnection;
        commentsResourcePath: Scalars['URI'];
        commentsUrl: Scalars['URI'];
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        isPinned: Scalars['Boolean'];
        isPrivate: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        number: Scalars['Int'];
        publishedAt: Maybe<Scalars['DateTime']>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        resourcePath: Scalars['URI'];
        team: ITeam;
        title: Scalars['String'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanPin: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanSubscribe: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
        viewerSubscription: Maybe<SubscriptionState>;
    };

export type ITeamDiscussionCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<ITeamDiscussionCommentOrder>;
    fromComment: Maybe<Scalars['Int']>;
};

export type ITeamDiscussionReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type ITeamDiscussionUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ITeamDiscussionComment = INode &
    IComment &
    IDeletable &
    IReactable &
    IUniformResourceLocatable &
    IUpdatable &
    IUpdatableComment & {
        author: Maybe<IActor>;
        authorAssociation: CommentAuthorAssociation;
        body: Scalars['String'];
        bodyHTML: Scalars['HTML'];
        bodyText: Scalars['String'];
        bodyVersion: Scalars['String'];
        createdAt: Scalars['DateTime'];
        createdViaEmail: Scalars['Boolean'];
        databaseId: Maybe<Scalars['Int']>;
        discussion: ITeamDiscussion;
        editor: Maybe<IActor>;
        id: Scalars['ID'];
        includesCreatedEdit: Scalars['Boolean'];
        lastEditedAt: Maybe<Scalars['DateTime']>;
        number: Scalars['Int'];
        publishedAt: Maybe<Scalars['DateTime']>;
        reactionGroups: Maybe<Array<IReactionGroup>>;
        reactions: IReactionConnection;
        resourcePath: Scalars['URI'];
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        userContentEdits: Maybe<IUserContentEditConnection>;
        viewerCanDelete: Scalars['Boolean'];
        viewerCanReact: Scalars['Boolean'];
        viewerCanUpdate: Scalars['Boolean'];
        viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
        viewerDidAuthor: Scalars['Boolean'];
    };

export type ITeamDiscussionCommentReactionsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    content: Maybe<ReactionContent>;
    orderBy: Maybe<IReactionOrder>;
};

export type ITeamDiscussionCommentUserContentEditsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type ITeamDiscussionCommentConnection = {
    edges: Maybe<Array<Maybe<ITeamDiscussionCommentEdge>>>;
    nodes: Maybe<Array<Maybe<ITeamDiscussionComment>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITeamDiscussionCommentEdge = {
    cursor: Scalars['String'];
    node: Maybe<ITeamDiscussionComment>;
};

export type ITeamDiscussionCommentOrder = {
    field: TeamDiscussionCommentOrderField;
    direction: OrderDirection;
};

export enum TeamDiscussionCommentOrderField {
    Number = 'NUMBER',
}

export type ITeamDiscussionConnection = {
    edges: Maybe<Array<Maybe<ITeamDiscussionEdge>>>;
    nodes: Maybe<Array<Maybe<ITeamDiscussion>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITeamDiscussionEdge = {
    cursor: Scalars['String'];
    node: Maybe<ITeamDiscussion>;
};

export type ITeamDiscussionOrder = {
    field: TeamDiscussionOrderField;
    direction: OrderDirection;
};

export enum TeamDiscussionOrderField {
    CreatedAt = 'CREATED_AT',
}

export type ITeamEdge = {
    cursor: Scalars['String'];
    node: Maybe<ITeam>;
};

export type ITeamMemberConnection = {
    edges: Maybe<Array<Maybe<ITeamMemberEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITeamMemberEdge = {
    cursor: Scalars['String'];
    memberAccessResourcePath: Scalars['URI'];
    memberAccessUrl: Scalars['URI'];
    node: IUser;
    role: TeamMemberRole;
};

export type ITeamMemberOrder = {
    field: TeamMemberOrderField;
    direction: OrderDirection;
};

export enum TeamMemberOrderField {
    Login = 'LOGIN',
    CreatedAt = 'CREATED_AT',
}

export enum TeamMemberRole {
    Maintainer = 'MAINTAINER',
    Member = 'MEMBER',
}

export enum TeamMembershipType {
    Immediate = 'IMMEDIATE',
    ChildTeam = 'CHILD_TEAM',
    All = 'ALL',
}

export type ITeamOrder = {
    field: TeamOrderField;
    direction: OrderDirection;
};

export enum TeamOrderField {
    Name = 'NAME',
}

export enum TeamPrivacy {
    Secret = 'SECRET',
    Visible = 'VISIBLE',
}

export type ITeamRemoveMemberAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    ITeamAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isLdapMapped: Maybe<Scalars['Boolean']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        team: Maybe<ITeam>;
        teamName: Maybe<Scalars['String']>;
        teamResourcePath: Maybe<Scalars['URI']>;
        teamUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type ITeamRemoveRepositoryAuditEntry = INode &
    IAuditEntry &
    IOrganizationAuditEntryData &
    IRepositoryAuditEntryData &
    ITeamAuditEntryData & {
        action: Scalars['String'];
        actor: Maybe<IAuditEntryActor>;
        actorIp: Maybe<Scalars['String']>;
        actorLocation: Maybe<IActorLocation>;
        actorLogin: Maybe<Scalars['String']>;
        actorResourcePath: Maybe<Scalars['URI']>;
        actorUrl: Maybe<Scalars['URI']>;
        createdAt: Scalars['PreciseDateTime'];
        id: Scalars['ID'];
        isLdapMapped: Maybe<Scalars['Boolean']>;
        operationType: Maybe<OperationType>;
        organization: Maybe<IOrganization>;
        organizationName: Maybe<Scalars['String']>;
        organizationResourcePath: Maybe<Scalars['URI']>;
        organizationUrl: Maybe<Scalars['URI']>;
        repository: Maybe<IRepository>;
        repositoryName: Maybe<Scalars['String']>;
        repositoryResourcePath: Maybe<Scalars['URI']>;
        repositoryUrl: Maybe<Scalars['URI']>;
        team: Maybe<ITeam>;
        teamName: Maybe<Scalars['String']>;
        teamResourcePath: Maybe<Scalars['URI']>;
        teamUrl: Maybe<Scalars['URI']>;
        user: Maybe<IUser>;
        userLogin: Maybe<Scalars['String']>;
        userResourcePath: Maybe<Scalars['URI']>;
        userUrl: Maybe<Scalars['URI']>;
    };

export type ITeamRepositoryConnection = {
    edges: Maybe<Array<Maybe<ITeamRepositoryEdge>>>;
    nodes: Maybe<Array<Maybe<IRepository>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITeamRepositoryEdge = {
    cursor: Scalars['String'];
    node: IRepository;
    permission: RepositoryPermission;
};

export type ITeamRepositoryOrder = {
    field: TeamRepositoryOrderField;
    direction: OrderDirection;
};

export enum TeamRepositoryOrderField {
    CreatedAt = 'CREATED_AT',
    UpdatedAt = 'UPDATED_AT',
    PushedAt = 'PUSHED_AT',
    Name = 'NAME',
    Permission = 'PERMISSION',
    Stargazers = 'STARGAZERS',
}

export enum TeamRole {
    Admin = 'ADMIN',
    Member = 'MEMBER',
}

export type ITextMatch = {
    fragment: Scalars['String'];
    highlights: Array<ITextMatchHighlight>;
    property: Scalars['String'];
};

export type ITextMatchHighlight = {
    beginIndice: Scalars['Int'];
    endIndice: Scalars['Int'];
    text: Scalars['String'];
};

export type ITopic = INode &
    IStarrable & {
        id: Scalars['ID'];
        name: Scalars['String'];
        relatedTopics: Array<ITopic>;
        stargazers: IStargazerConnection;
        viewerHasStarred: Scalars['Boolean'];
    };

export type ITopicRelatedTopicsArgs = {
    first?: Maybe<Scalars['Int']>;
};

export type ITopicStargazersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<IStarOrder>;
};

export type ITopicAuditEntryData = {
    topic: Maybe<ITopic>;
    topicName: Maybe<Scalars['String']>;
};

export type ITopicConnection = {
    edges: Maybe<Array<Maybe<ITopicEdge>>>;
    nodes: Maybe<Array<Maybe<ITopic>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type ITopicEdge = {
    cursor: Scalars['String'];
    node: Maybe<ITopic>;
};

export enum TopicSuggestionDeclineReason {
    NotRelevant = 'NOT_RELEVANT',
    TooSpecific = 'TOO_SPECIFIC',
    PersonalPreference = 'PERSONAL_PREFERENCE',
    TooGeneral = 'TOO_GENERAL',
}

export type ITransferIssueInput = {
    issueId: Scalars['ID'];
    repositoryId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type ITransferIssuePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    issue: Maybe<IIssue>;
};

export type ITransferredEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    fromRepository: Maybe<IRepository>;
    id: Scalars['ID'];
    issue: IIssue;
};

export type ITree = INode &
    IGitObject & {
        abbreviatedOid: Scalars['String'];
        commitResourcePath: Scalars['URI'];
        commitUrl: Scalars['URI'];
        entries: Maybe<Array<ITreeEntry>>;
        id: Scalars['ID'];
        oid: Scalars['GitObjectID'];
        repository: IRepository;
    };

export type ITreeEntry = {
    mode: Scalars['Int'];
    name: Scalars['String'];
    object: Maybe<IGitObject>;
    oid: Scalars['GitObjectID'];
    repository: IRepository;
    type: Scalars['String'];
};

export type IUnarchiveRepositoryInput = {
    repositoryId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnarchiveRepositoryPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type IUnassignedEvent = INode & {
    actor: Maybe<IActor>;
    assignable: IAssignable;
    assignee: Maybe<IAssignee>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    user: Maybe<IUser>;
};

export type IUnfollowUserInput = {
    userId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnfollowUserPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    user: Maybe<IUser>;
};

export type IUniformResourceLocatable = {
    resourcePath: Scalars['URI'];
    url: Scalars['URI'];
};

export type IUnknownSignature = IGitSignature & {
    email: Scalars['String'];
    isValid: Scalars['Boolean'];
    payload: Scalars['String'];
    signature: Scalars['String'];
    signer: Maybe<IUser>;
    state: GitSignatureState;
    wasSignedByGitHub: Scalars['Boolean'];
};

export type IUnlabeledEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    label: ILabel;
    labelable: ILabelable;
};

export type IUnlinkRepositoryFromProjectInput = {
    projectId: Scalars['ID'];
    repositoryId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnlinkRepositoryFromProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    project: Maybe<IProject>;
    repository: Maybe<IRepository>;
};

export type IUnlockedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    lockable: ILockable;
};

export type IUnlockLockableInput = {
    lockableId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnlockLockablePayload = {
    actor: Maybe<IActor>;
    clientMutationId: Maybe<Scalars['String']>;
    unlockedRecord: Maybe<ILockable>;
};

export type IUnmarkIssueAsDuplicateInput = {
    duplicateId: Scalars['ID'];
    canonicalId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnmarkIssueAsDuplicatePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    duplicate: Maybe<IIssueOrPullRequest>;
};

export type IUnminimizeCommentInput = {
    subjectId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnpinIssueInput = {
    issueId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnpinnedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    issue: IIssue;
};

export type IUnresolveReviewThreadInput = {
    threadId: Scalars['ID'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUnresolveReviewThreadPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    thread: Maybe<IPullRequestReviewThread>;
};

export type IUnsubscribedEvent = INode & {
    actor: Maybe<IActor>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    subscribable: ISubscribable;
};

export type IUpdatable = {
    viewerCanUpdate: Scalars['Boolean'];
};

export type IUpdatableComment = {
    viewerCannotUpdateReasons: Array<CommentCannotUpdateReason>;
};

export type IUpdateBranchProtectionRuleInput = {
    branchProtectionRuleId: Scalars['ID'];
    pattern: Maybe<Scalars['String']>;
    requiresApprovingReviews: Maybe<Scalars['Boolean']>;
    requiredApprovingReviewCount: Maybe<Scalars['Int']>;
    requiresCommitSignatures: Maybe<Scalars['Boolean']>;
    isAdminEnforced: Maybe<Scalars['Boolean']>;
    requiresStatusChecks: Maybe<Scalars['Boolean']>;
    requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
    requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
    dismissesStaleReviews: Maybe<Scalars['Boolean']>;
    restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
    reviewDismissalActorIds: Maybe<Array<Scalars['ID']>>;
    restrictsPushes: Maybe<Scalars['Boolean']>;
    pushActorIds: Maybe<Array<Scalars['ID']>>;
    requiredStatusCheckContexts: Maybe<Array<Scalars['String']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateBranchProtectionRulePayload = {
    branchProtectionRule: Maybe<IBranchProtectionRule>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseActionExecutionCapabilitySettingInput = {
    enterpriseId: Scalars['ID'];
    capability: ActionExecutionCapabilitySetting;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseActionExecutionCapabilitySettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseAdministratorRoleInput = {
    enterpriseId: Scalars['ID'];
    login: Scalars['String'];
    role: EnterpriseAdministratorRole;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseAdministratorRolePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseDefaultRepositoryPermissionSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: Maybe<EnterpriseMembersCanCreateRepositoriesSettingValue>;
    membersCanCreateRepositoriesPolicyEnabled: Maybe<Scalars['Boolean']>;
    membersCanCreatePublicRepositories: Maybe<Scalars['Boolean']>;
    membersCanCreatePrivateRepositories: Maybe<Scalars['Boolean']>;
    membersCanCreateInternalRepositories: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanMakePurchasesSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseMembersCanMakePurchasesSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseOrganizationProjectsSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseOrganizationProjectsSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseProfileInput = {
    enterpriseId: Scalars['ID'];
    name: Maybe<Scalars['String']>;
    description: Maybe<Scalars['String']>;
    websiteUrl: Maybe<Scalars['String']>;
    location: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseProfilePayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
};

export type IUpdateEnterpriseRepositoryProjectsSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseRepositoryProjectsSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseTeamDiscussionsSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledDisabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseTeamDiscussionsSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
    enterpriseId: Scalars['ID'];
    settingValue: EnterpriseEnabledSettingValue;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    enterprise: Maybe<IEnterprise>;
    message: Maybe<Scalars['String']>;
};

export type IUpdateIssueCommentInput = {
    id: Scalars['ID'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateIssueCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    issueComment: Maybe<IIssueComment>;
};

export type IUpdateIssueInput = {
    id: Scalars['ID'];
    title: Maybe<Scalars['String']>;
    body: Maybe<Scalars['String']>;
    assigneeIds: Maybe<Array<Scalars['ID']>>;
    milestoneId: Maybe<Scalars['ID']>;
    labelIds: Maybe<Array<Scalars['ID']>>;
    state: Maybe<IssueState>;
    projectIds: Maybe<Array<Scalars['ID']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateIssuePayload = {
    actor: Maybe<IActor>;
    clientMutationId: Maybe<Scalars['String']>;
    issue: Maybe<IIssue>;
};

export type IUpdateProjectCardInput = {
    projectCardId: Scalars['ID'];
    isArchived: Maybe<Scalars['Boolean']>;
    note: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateProjectCardPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    projectCard: Maybe<IProjectCard>;
};

export type IUpdateProjectColumnInput = {
    projectColumnId: Scalars['ID'];
    name: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateProjectColumnPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    projectColumn: Maybe<IProjectColumn>;
};

export type IUpdateProjectInput = {
    projectId: Scalars['ID'];
    name: Maybe<Scalars['String']>;
    body: Maybe<Scalars['String']>;
    state: Maybe<ProjectState>;
    public: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateProjectPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    project: Maybe<IProject>;
};

export type IUpdatePullRequestInput = {
    pullRequestId: Scalars['ID'];
    baseRefName: Maybe<Scalars['String']>;
    title: Maybe<Scalars['String']>;
    body: Maybe<Scalars['String']>;
    state: Maybe<PullRequestUpdateState>;
    maintainerCanModify: Maybe<Scalars['Boolean']>;
    assigneeIds: Maybe<Array<Scalars['ID']>>;
    milestoneId: Maybe<Scalars['ID']>;
    labelIds: Maybe<Array<Scalars['ID']>>;
    projectIds: Maybe<Array<Scalars['ID']>>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdatePullRequestPayload = {
    actor: Maybe<IActor>;
    clientMutationId: Maybe<Scalars['String']>;
    pullRequest: Maybe<IPullRequest>;
};

export type IUpdatePullRequestReviewCommentInput = {
    pullRequestReviewCommentId: Scalars['ID'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdatePullRequestReviewCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReviewComment: Maybe<IPullRequestReviewComment>;
};

export type IUpdatePullRequestReviewInput = {
    pullRequestReviewId: Scalars['ID'];
    body: Scalars['String'];
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdatePullRequestReviewPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    pullRequestReview: Maybe<IPullRequestReview>;
};

export type IUpdateRefInput = {
    refId: Scalars['ID'];
    oid: Scalars['GitObjectID'];
    force: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateRefPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    ref: Maybe<IRef>;
};

export type IUpdateRepositoryInput = {
    repositoryId: Scalars['ID'];
    name: Maybe<Scalars['String']>;
    description: Maybe<Scalars['String']>;
    template: Maybe<Scalars['Boolean']>;
    homepageUrl: Maybe<Scalars['URI']>;
    hasWikiEnabled: Maybe<Scalars['Boolean']>;
    hasIssuesEnabled: Maybe<Scalars['Boolean']>;
    hasProjectsEnabled: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateRepositoryPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    repository: Maybe<IRepository>;
};

export type IUpdateSubscriptionInput = {
    subscribableId: Scalars['ID'];
    state: SubscriptionState;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateSubscriptionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    subscribable: Maybe<ISubscribable>;
};

export type IUpdateTeamDiscussionCommentInput = {
    id: Scalars['ID'];
    body: Scalars['String'];
    bodyVersion: Maybe<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateTeamDiscussionCommentPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    teamDiscussionComment: Maybe<ITeamDiscussionComment>;
};

export type IUpdateTeamDiscussionInput = {
    id: Scalars['ID'];
    title: Maybe<Scalars['String']>;
    body: Maybe<Scalars['String']>;
    bodyVersion: Maybe<Scalars['String']>;
    pinned: Maybe<Scalars['Boolean']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateTeamDiscussionPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    teamDiscussion: Maybe<ITeamDiscussion>;
};

export type IUpdateTopicsInput = {
    repositoryId: Scalars['ID'];
    topicNames: Array<Scalars['String']>;
    clientMutationId: Maybe<Scalars['String']>;
};

export type IUpdateTopicsPayload = {
    clientMutationId: Maybe<Scalars['String']>;
    invalidTopicNames: Maybe<Array<Scalars['String']>>;
    repository: Maybe<IRepository>;
};

export type IUser = INode &
    IActor &
    IRegistryPackageOwner &
    IRegistryPackageSearch &
    IProjectOwner &
    IRepositoryOwner &
    IUniformResourceLocatable &
    IProfileOwner &
    ISponsorable & {
        anyPinnableItems: Scalars['Boolean'];
        avatarUrl: Scalars['URI'];
        bio: Maybe<Scalars['String']>;
        bioHTML: Scalars['HTML'];
        commitComments: ICommitCommentConnection;
        company: Maybe<Scalars['String']>;
        companyHTML: Scalars['HTML'];
        contributionsCollection: IContributionsCollection;
        createdAt: Scalars['DateTime'];
        databaseId: Maybe<Scalars['Int']>;
        email: Scalars['String'];
        followers: IFollowerConnection;
        following: IFollowingConnection;
        gist: Maybe<IGist>;
        gistComments: IGistCommentConnection;
        gists: IGistConnection;
        hovercard: IHovercard;
        id: Scalars['ID'];
        isBountyHunter: Scalars['Boolean'];
        isCampusExpert: Scalars['Boolean'];
        isDeveloperProgramMember: Scalars['Boolean'];
        isEmployee: Scalars['Boolean'];
        isHireable: Scalars['Boolean'];
        isSiteAdmin: Scalars['Boolean'];
        isViewer: Scalars['Boolean'];
        issueComments: IIssueCommentConnection;
        issues: IIssueConnection;
        itemShowcase: IProfileItemShowcase;
        location: Maybe<Scalars['String']>;
        login: Scalars['String'];
        name: Maybe<Scalars['String']>;
        organization: Maybe<IOrganization>;
        organizations: IOrganizationConnection;
        pinnableItems: IPinnableItemConnection;
        pinnedItems: IPinnableItemConnection;
        pinnedItemsRemaining: Scalars['Int'];
        pinnedRepositories: IRepositoryConnection;
        project: Maybe<IProject>;
        projects: IProjectConnection;
        projectsResourcePath: Scalars['URI'];
        projectsUrl: Scalars['URI'];
        publicKeys: IPublicKeyConnection;
        pullRequests: IPullRequestConnection;
        registryPackages: IRegistryPackageConnection;
        registryPackagesForQuery: IRegistryPackageConnection;
        repositories: IRepositoryConnection;
        repositoriesContributedTo: IRepositoryConnection;
        repository: Maybe<IRepository>;
        resourcePath: Scalars['URI'];
        savedReplies: Maybe<ISavedReplyConnection>;
        sponsorsListing: Maybe<ISponsorsListing>;
        sponsorshipsAsMaintainer: ISponsorshipConnection;
        sponsorshipsAsSponsor: ISponsorshipConnection;
        starredRepositories: IStarredRepositoryConnection;
        status: Maybe<IUserStatus>;
        topRepositories: IRepositoryConnection;
        updatedAt: Scalars['DateTime'];
        url: Scalars['URI'];
        viewerCanChangePinnedItems: Scalars['Boolean'];
        viewerCanCreateProjects: Scalars['Boolean'];
        viewerCanFollow: Scalars['Boolean'];
        viewerIsFollowing: Scalars['Boolean'];
        watching: IRepositoryConnection;
        websiteUrl: Maybe<Scalars['URI']>;
    };

export type IUserAnyPinnableItemsArgs = {
    type: Maybe<PinnableItemType>;
};

export type IUserAvatarUrlArgs = {
    size: Maybe<Scalars['Int']>;
};

export type IUserCommitCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserContributionsCollectionArgs = {
    organizationID: Maybe<Scalars['ID']>;
    from: Maybe<Scalars['DateTime']>;
    to: Maybe<Scalars['DateTime']>;
};

export type IUserFollowersArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserFollowingArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserGistArgs = {
    name: Scalars['String'];
};

export type IUserGistCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserGistsArgs = {
    privacy: Maybe<GistPrivacy>;
    orderBy: Maybe<IGistOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserHovercardArgs = {
    primarySubjectId: Maybe<Scalars['ID']>;
};

export type IUserIssueCommentsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserIssuesArgs = {
    orderBy: Maybe<IIssueOrder>;
    labels: Maybe<Array<Scalars['String']>>;
    states: Maybe<Array<IssueState>>;
    filterBy: Maybe<IIssueFilters>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserOrganizationArgs = {
    login: Scalars['String'];
};

export type IUserOrganizationsArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserPinnableItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserPinnedItemsArgs = {
    types: Maybe<Array<PinnableItemType>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserPinnedRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserProjectArgs = {
    number: Scalars['Int'];
};

export type IUserProjectsArgs = {
    orderBy: Maybe<IProjectOrder>;
    search: Maybe<Scalars['String']>;
    states: Maybe<Array<ProjectState>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserPublicKeysArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserPullRequestsArgs = {
    states: Maybe<Array<PullRequestState>>;
    labels: Maybe<Array<Scalars['String']>>;
    headRefName: Maybe<Scalars['String']>;
    baseRefName: Maybe<Scalars['String']>;
    orderBy: Maybe<IIssueOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserRegistryPackagesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['String']>;
    names: Maybe<Array<Maybe<Scalars['String']>>>;
    repositoryId: Maybe<Scalars['ID']>;
    packageType: Maybe<RegistryPackageType>;
    registryPackageType: Maybe<Scalars['String']>;
    publicOnly?: Maybe<Scalars['Boolean']>;
};

export type IUserRegistryPackagesForQueryArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    query: Maybe<Scalars['String']>;
    packageType: Maybe<RegistryPackageType>;
};

export type IUserRepositoriesArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    isFork: Maybe<Scalars['Boolean']>;
};

export type IUserRepositoriesContributedToArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    isLocked: Maybe<Scalars['Boolean']>;
    includeUserRepositories: Maybe<Scalars['Boolean']>;
    contributionTypes: Maybe<Array<Maybe<RepositoryContributionType>>>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserRepositoryArgs = {
    name: Scalars['String'];
};

export type IUserSavedRepliesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy?: Maybe<ISavedReplyOrder>;
};

export type IUserSponsorshipsAsMaintainerArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    includePrivate?: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type IUserSponsorshipsAsSponsorArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: Maybe<ISponsorshipOrder>;
};

export type IUserStarredRepositoriesArgs = {
    ownedByViewer: Maybe<Scalars['Boolean']>;
    orderBy: Maybe<IStarOrder>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export type IUserTopRepositoriesArgs = {
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
    orderBy: IRepositoryOrder;
    since: Maybe<Scalars['DateTime']>;
};

export type IUserWatchingArgs = {
    privacy: Maybe<RepositoryPrivacy>;
    orderBy: Maybe<IRepositoryOrder>;
    affiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    ownerAffiliations?: Maybe<Array<Maybe<RepositoryAffiliation>>>;
    isLocked: Maybe<Scalars['Boolean']>;
    after: Maybe<Scalars['String']>;
    before: Maybe<Scalars['String']>;
    first: Maybe<Scalars['Int']>;
    last: Maybe<Scalars['Int']>;
};

export enum UserBlockDuration {
    OneDay = 'ONE_DAY',
    ThreeDays = 'THREE_DAYS',
    OneWeek = 'ONE_WEEK',
    OneMonth = 'ONE_MONTH',
    Permanent = 'PERMANENT',
}

export type IUserBlockedEvent = INode & {
    actor: Maybe<IActor>;
    blockDuration: UserBlockDuration;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    subject: Maybe<IUser>;
};

export type IUserConnection = {
    edges: Maybe<Array<Maybe<IUserEdge>>>;
    nodes: Maybe<Array<Maybe<IUser>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IUserContentEdit = INode & {
    createdAt: Scalars['DateTime'];
    deletedAt: Maybe<Scalars['DateTime']>;
    deletedBy: Maybe<IActor>;
    diff: Maybe<Scalars['String']>;
    editedAt: Scalars['DateTime'];
    editor: Maybe<IActor>;
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
};

export type IUserContentEditConnection = {
    edges: Maybe<Array<Maybe<IUserContentEditEdge>>>;
    nodes: Maybe<Array<Maybe<IUserContentEdit>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IUserContentEditEdge = {
    cursor: Scalars['String'];
    node: Maybe<IUserContentEdit>;
};

export type IUserEdge = {
    cursor: Scalars['String'];
    node: Maybe<IUser>;
};

export type IUserStatus = INode & {
    createdAt: Scalars['DateTime'];
    emoji: Maybe<Scalars['String']>;
    emojiHTML: Maybe<Scalars['HTML']>;
    expiresAt: Maybe<Scalars['DateTime']>;
    id: Scalars['ID'];
    indicatesLimitedAvailability: Scalars['Boolean'];
    message: Maybe<Scalars['String']>;
    organization: Maybe<IOrganization>;
    updatedAt: Scalars['DateTime'];
    user: IUser;
};

export type IUserStatusConnection = {
    edges: Maybe<Array<Maybe<IUserStatusEdge>>>;
    nodes: Maybe<Array<Maybe<IUserStatus>>>;
    pageInfo: IPageInfo;
    totalCount: Scalars['Int'];
};

export type IUserStatusEdge = {
    cursor: Scalars['String'];
    node: Maybe<IUserStatus>;
};

export type IUserStatusOrder = {
    field: UserStatusOrderField;
    direction: OrderDirection;
};

export enum UserStatusOrderField {
    UpdatedAt = 'UPDATED_AT',
}

export type IViewerHovercardContext = IHovercardContext & {
    message: Scalars['String'];
    octicon: Scalars['String'];
    viewer: IUser;
};
