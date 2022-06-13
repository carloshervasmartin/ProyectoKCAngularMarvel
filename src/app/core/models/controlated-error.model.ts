import { OutputTypes } from "@core/enums/output-types.enum";
import { Model } from "@core/interfaces/model.interface";

export class ControlatedError extends Error implements Model  {
  id!: number | undefined;
  title!: string;
  output!: OutputTypes;
  static message: string;

  constructor(message: string = '', title: string = 'Error inseperado', output: OutputTypes = OutputTypes.MODAL) {
    super(message);
    this.title = title;
    this.output = output;
  }

  serialize() {
    return {};
  }
}
