import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ToDoModel = runtime.Types.Result.DefaultSelection<Prisma.$ToDoPayload>;
export type AggregateToDo = {
    _count: ToDoCountAggregateOutputType | null;
    _avg: ToDoAvgAggregateOutputType | null;
    _sum: ToDoSumAggregateOutputType | null;
    _min: ToDoMinAggregateOutputType | null;
    _max: ToDoMaxAggregateOutputType | null;
};
export type ToDoAvgAggregateOutputType = {
    id: number | null;
};
export type ToDoSumAggregateOutputType = {
    id: number | null;
};
export type ToDoMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    targetDate: Date | null;
    assignedUserName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    status: string | null;
};
export type ToDoMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    targetDate: Date | null;
    assignedUserName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    status: string | null;
};
export type ToDoCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    targetDate: number;
    assignedUserName: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    status: number;
    _all: number;
};
export type ToDoAvgAggregateInputType = {
    id?: true;
};
export type ToDoSumAggregateInputType = {
    id?: true;
};
export type ToDoMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    targetDate?: true;
    assignedUserName?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    status?: true;
};
export type ToDoMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    targetDate?: true;
    assignedUserName?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    status?: true;
};
export type ToDoCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    targetDate?: true;
    assignedUserName?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    status?: true;
    _all?: true;
};
export type ToDoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToDoWhereInput;
    orderBy?: Prisma.ToDoOrderByWithRelationInput | Prisma.ToDoOrderByWithRelationInput[];
    cursor?: Prisma.ToDoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ToDoCountAggregateInputType;
    _avg?: ToDoAvgAggregateInputType;
    _sum?: ToDoSumAggregateInputType;
    _min?: ToDoMinAggregateInputType;
    _max?: ToDoMaxAggregateInputType;
};
export type GetToDoAggregateType<T extends ToDoAggregateArgs> = {
    [P in keyof T & keyof AggregateToDo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateToDo[P]> : Prisma.GetScalarType<T[P], AggregateToDo[P]>;
};
export type ToDoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToDoWhereInput;
    orderBy?: Prisma.ToDoOrderByWithAggregationInput | Prisma.ToDoOrderByWithAggregationInput[];
    by: Prisma.ToDoScalarFieldEnum[] | Prisma.ToDoScalarFieldEnum;
    having?: Prisma.ToDoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToDoCountAggregateInputType | true;
    _avg?: ToDoAvgAggregateInputType;
    _sum?: ToDoSumAggregateInputType;
    _min?: ToDoMinAggregateInputType;
    _max?: ToDoMaxAggregateInputType;
};
export type ToDoGroupByOutputType = {
    id: number;
    title: string;
    description: string | null;
    targetDate: Date | null;
    assignedUserName: string | null;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    status: string;
    _count: ToDoCountAggregateOutputType | null;
    _avg: ToDoAvgAggregateOutputType | null;
    _sum: ToDoSumAggregateOutputType | null;
    _min: ToDoMinAggregateOutputType | null;
    _max: ToDoMaxAggregateOutputType | null;
};
export type GetToDoGroupByPayload<T extends ToDoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ToDoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ToDoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ToDoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ToDoGroupByOutputType[P]>;
}>>;
export type ToDoWhereInput = {
    AND?: Prisma.ToDoWhereInput | Prisma.ToDoWhereInput[];
    OR?: Prisma.ToDoWhereInput[];
    NOT?: Prisma.ToDoWhereInput | Prisma.ToDoWhereInput[];
    id?: Prisma.IntFilter<"ToDo"> | number;
    title?: Prisma.StringFilter<"ToDo"> | string;
    description?: Prisma.StringNullableFilter<"ToDo"> | string | null;
    targetDate?: Prisma.DateTimeNullableFilter<"ToDo"> | Date | string | null;
    assignedUserName?: Prisma.StringNullableFilter<"ToDo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ToDo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ToDo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"ToDo"> | Date | string | null;
    status?: Prisma.StringFilter<"ToDo"> | string;
};
export type ToDoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedUserName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ToDoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ToDoWhereInput | Prisma.ToDoWhereInput[];
    OR?: Prisma.ToDoWhereInput[];
    NOT?: Prisma.ToDoWhereInput | Prisma.ToDoWhereInput[];
    title?: Prisma.StringFilter<"ToDo"> | string;
    description?: Prisma.StringNullableFilter<"ToDo"> | string | null;
    targetDate?: Prisma.DateTimeNullableFilter<"ToDo"> | Date | string | null;
    assignedUserName?: Prisma.StringNullableFilter<"ToDo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ToDo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ToDo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"ToDo"> | Date | string | null;
    status?: Prisma.StringFilter<"ToDo"> | string;
}, "id">;
export type ToDoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    targetDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    assignedUserName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.ToDoCountOrderByAggregateInput;
    _avg?: Prisma.ToDoAvgOrderByAggregateInput;
    _max?: Prisma.ToDoMaxOrderByAggregateInput;
    _min?: Prisma.ToDoMinOrderByAggregateInput;
    _sum?: Prisma.ToDoSumOrderByAggregateInput;
};
export type ToDoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ToDoScalarWhereWithAggregatesInput | Prisma.ToDoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ToDoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ToDoScalarWhereWithAggregatesInput | Prisma.ToDoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ToDo"> | number;
    title?: Prisma.StringWithAggregatesFilter<"ToDo"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ToDo"> | string | null;
    targetDate?: Prisma.DateTimeNullableWithAggregatesFilter<"ToDo"> | Date | string | null;
    assignedUserName?: Prisma.StringNullableWithAggregatesFilter<"ToDo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ToDo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ToDo"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ToDo"> | Date | string | null;
    status?: Prisma.StringWithAggregatesFilter<"ToDo"> | string;
};
export type ToDoCreateInput = {
    title: string;
    description?: string | null;
    targetDate?: Date | string | null;
    assignedUserName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    status?: string;
};
export type ToDoUncheckedCreateInput = {
    id?: number;
    title: string;
    description?: string | null;
    targetDate?: Date | string | null;
    assignedUserName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    status?: string;
};
export type ToDoUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ToDoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ToDoCreateManyInput = {
    id?: number;
    title: string;
    description?: string | null;
    targetDate?: Date | string | null;
    assignedUserName?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    status?: string;
};
export type ToDoUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ToDoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    targetDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignedUserName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ToDoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    targetDate?: Prisma.SortOrder;
    assignedUserName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ToDoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ToDoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    targetDate?: Prisma.SortOrder;
    assignedUserName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ToDoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    targetDate?: Prisma.SortOrder;
    assignedUserName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type ToDoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ToDoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    targetDate?: boolean;
    assignedUserName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    status?: boolean;
}, ExtArgs["result"]["toDo"]>;
export type ToDoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    targetDate?: boolean;
    assignedUserName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    status?: boolean;
}, ExtArgs["result"]["toDo"]>;
export type ToDoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    targetDate?: boolean;
    assignedUserName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    status?: boolean;
}, ExtArgs["result"]["toDo"]>;
export type ToDoSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    targetDate?: boolean;
    assignedUserName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    status?: boolean;
};
export type ToDoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "targetDate" | "assignedUserName" | "createdAt" | "updatedAt" | "deletedAt" | "status", ExtArgs["result"]["toDo"]>;
export type $ToDoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ToDo";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string | null;
        targetDate: Date | null;
        assignedUserName: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: string;
    }, ExtArgs["result"]["toDo"]>;
    composites: {};
};
export type ToDoGetPayload<S extends boolean | null | undefined | ToDoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ToDoPayload, S>;
export type ToDoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ToDoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ToDoCountAggregateInputType | true;
};
export interface ToDoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ToDo'];
        meta: {
            name: 'ToDo';
        };
    };
    findUnique<T extends ToDoFindUniqueArgs>(args: Prisma.SelectSubset<T, ToDoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ToDoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ToDoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ToDoFindFirstArgs>(args?: Prisma.SelectSubset<T, ToDoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ToDoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ToDoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ToDoFindManyArgs>(args?: Prisma.SelectSubset<T, ToDoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ToDoCreateArgs>(args: Prisma.SelectSubset<T, ToDoCreateArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ToDoCreateManyArgs>(args?: Prisma.SelectSubset<T, ToDoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ToDoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ToDoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ToDoDeleteArgs>(args: Prisma.SelectSubset<T, ToDoDeleteArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ToDoUpdateArgs>(args: Prisma.SelectSubset<T, ToDoUpdateArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ToDoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ToDoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ToDoUpdateManyArgs>(args: Prisma.SelectSubset<T, ToDoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ToDoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ToDoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ToDoUpsertArgs>(args: Prisma.SelectSubset<T, ToDoUpsertArgs<ExtArgs>>): Prisma.Prisma__ToDoClient<runtime.Types.Result.GetResult<Prisma.$ToDoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ToDoCountArgs>(args?: Prisma.Subset<T, ToDoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ToDoCountAggregateOutputType> : number>;
    aggregate<T extends ToDoAggregateArgs>(args: Prisma.Subset<T, ToDoAggregateArgs>): Prisma.PrismaPromise<GetToDoAggregateType<T>>;
    groupBy<T extends ToDoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ToDoGroupByArgs['orderBy'];
    } : {
        orderBy?: ToDoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ToDoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToDoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ToDoFieldRefs;
}
export interface Prisma__ToDoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ToDoFieldRefs {
    readonly id: Prisma.FieldRef<"ToDo", 'Int'>;
    readonly title: Prisma.FieldRef<"ToDo", 'String'>;
    readonly description: Prisma.FieldRef<"ToDo", 'String'>;
    readonly targetDate: Prisma.FieldRef<"ToDo", 'DateTime'>;
    readonly assignedUserName: Prisma.FieldRef<"ToDo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ToDo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ToDo", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"ToDo", 'DateTime'>;
    readonly status: Prisma.FieldRef<"ToDo", 'String'>;
}
export type ToDoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where: Prisma.ToDoWhereUniqueInput;
};
export type ToDoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where: Prisma.ToDoWhereUniqueInput;
};
export type ToDoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where?: Prisma.ToDoWhereInput;
    orderBy?: Prisma.ToDoOrderByWithRelationInput | Prisma.ToDoOrderByWithRelationInput[];
    cursor?: Prisma.ToDoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ToDoScalarFieldEnum | Prisma.ToDoScalarFieldEnum[];
};
export type ToDoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where?: Prisma.ToDoWhereInput;
    orderBy?: Prisma.ToDoOrderByWithRelationInput | Prisma.ToDoOrderByWithRelationInput[];
    cursor?: Prisma.ToDoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ToDoScalarFieldEnum | Prisma.ToDoScalarFieldEnum[];
};
export type ToDoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where?: Prisma.ToDoWhereInput;
    orderBy?: Prisma.ToDoOrderByWithRelationInput | Prisma.ToDoOrderByWithRelationInput[];
    cursor?: Prisma.ToDoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ToDoScalarFieldEnum | Prisma.ToDoScalarFieldEnum[];
};
export type ToDoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ToDoCreateInput, Prisma.ToDoUncheckedCreateInput>;
};
export type ToDoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ToDoCreateManyInput | Prisma.ToDoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ToDoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    data: Prisma.ToDoCreateManyInput | Prisma.ToDoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ToDoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ToDoUpdateInput, Prisma.ToDoUncheckedUpdateInput>;
    where: Prisma.ToDoWhereUniqueInput;
};
export type ToDoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ToDoUpdateManyMutationInput, Prisma.ToDoUncheckedUpdateManyInput>;
    where?: Prisma.ToDoWhereInput;
    limit?: number;
};
export type ToDoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ToDoUpdateManyMutationInput, Prisma.ToDoUncheckedUpdateManyInput>;
    where?: Prisma.ToDoWhereInput;
    limit?: number;
};
export type ToDoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where: Prisma.ToDoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ToDoCreateInput, Prisma.ToDoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ToDoUpdateInput, Prisma.ToDoUncheckedUpdateInput>;
};
export type ToDoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
    where: Prisma.ToDoWhereUniqueInput;
};
export type ToDoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToDoWhereInput;
    limit?: number;
};
export type ToDoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToDoSelect<ExtArgs> | null;
    omit?: Prisma.ToDoOmit<ExtArgs> | null;
};
