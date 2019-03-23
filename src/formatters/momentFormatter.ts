import { DrbFormatter } from './index'
import { basicConcatenator } from '../concatenators/basicConcatenator'
import { momentTranslator } from '../translators/momentTranslator'
import { momentTokenizer } from '../tokenizers/momentTokenizer'

export const momentFormatter: DrbFormatter = {
  concat: basicConcatenator,
  tokenize: momentTokenizer,
  translate: momentTranslator,
}
