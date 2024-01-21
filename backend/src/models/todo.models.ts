import {
  modelOptions,
  getModelForClass,
  prop as Property
} from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Todo {
  @Property({ required: true })
  public title: string

  @Property({ required: true })
  public category: string

  @Property({ type: Boolean, default: false })
  public completed: boolean
}

export const TodoModel = getModelForClass(Todo)
