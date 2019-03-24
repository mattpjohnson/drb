import { DrbConcatenator } from '../concatenators/index';
import { DrbTokenizer } from '../tokenizers/index';
import { DrbTranslator } from '../translators/index';
export interface DrbFormatter {
    tokenize: DrbTokenizer;
    translate: DrbTranslator;
    concat: DrbConcatenator;
}
