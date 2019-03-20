import { DrbFormatter } from './index'
import { basicConcatenator } from '../concatenators/basicConcatenator'
import { momentTranslator } from '../translators/momentTranslator'
import { runTokenizer } from '../tokenizers/runTokenizer'

export const momentFormatter: DrbFormatter = {
  concat: basicConcatenator,
  tokenize: runTokenizer,
  translate: momentTranslator,
}
