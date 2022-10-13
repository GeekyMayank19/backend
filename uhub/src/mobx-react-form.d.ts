declare module "mobx-react-form" {
  export default MRF.MobxReactForm;
}

type Dictionary<T> = { [key: string]: T };

declare namespace MRF {
  class MobxReactForm {
    constructor(options: MRF.Options, settings?: MRF.Settings);
    isValid: boolean;
    get(field: string): string;
    set(obj: Dictionary<string>): void;
    $(selector: string): Field;
    onSubmit(): void;
    init(obj: Dictionary<string>): void;
    validate(): void;
    values(): Dictionary<string>;
    submit<T>(handlers: { onSuccess?: Handler; onError?: Handler }): Promise<T>;
    errors(): Dictionary<string>;
    select(path: string): Field;
    submitting: boolean;
  }

  type Handler = (form: MobxReactForm) => void | Promise<any>;

  interface Field extends FieldSpec {
    bind(): FieldSpec;
  }

  interface FieldSpec {
    name?: string;
    value?: string;
    label?: string;
    placeholder?: string;
    rules?: string;
  }

  type FieldsDefinition = string[] | Dictionary<string | FieldSpec>;

  interface Options {
    // fields?: FieldsDefinition;
    fields?: (
      | {
          name: string;
          label: string;
          placeholder: string;
          rules: string;
          value: string;
        }
      | {
          name: string;
          label: string;
          placeholder: string;
          rules: string;
          value?: undefined;
        }
    )[];
    values?: Dictionary<string>;
  }

  interface Settings {
    plugins?: {
      dvr: any;
    };
    hooks?: {
      onSuccess(form: MobxReactForm): void;
    };
    options?: {};
  }
}
