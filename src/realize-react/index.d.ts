type ReactNode = number | string | ReactElement | null | undefined | boolean;

type ReactElement = {
  type: string | number | Symbol;
  props: Record<string, any> & {
    children: ReactNode | ReactNode[];
  };
};
