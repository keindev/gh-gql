import * as Documents from '../documents/file.js';

import { IFileContentQuery, IFileContentQueryVariables, IFileIdQuery, IFileIdQueryVariables } from '../types/file.js';
import Query from './Query.js';

export default class FileQuery extends Query {
  /** Get file content */
  async getContent({
    oid,
    filePath,
    ...others
  }: Omit<IFileContentQueryVariables, 'expression'> & { filePath: string; oid: string }): Promise<string> {
    const response = await this.execute<IFileContentQuery>(Documents.getFileContent, {
      ...others,
      expression: `${oid}:${filePath}`,
    });

    return response.repository.object.text;
  }

  /** Get a file object id */
  async getId(variables: IFileIdQueryVariables): Promise<string | undefined> {
    const response = await this.execute<IFileIdQuery>(Documents.getFileId, variables);

    return response.repository.ref.target.history.nodes[0]?.oid;
  }
}
