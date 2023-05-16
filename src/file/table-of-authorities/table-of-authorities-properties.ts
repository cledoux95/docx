
/**
 * TOA Options according to this docs:
 * https://www.ecma-international.org/publications/standards/Ecma-376.htm
 * Part 1 - Page 1245
 */

export interface ITableOfAuthoritiesOptions {

    /**
     * \b option - Includes entries only from the portion of the document marked by
     * the bookmark named by text in this switch's field-argument.
     */
    readonly entriesFromBookmark?: string;

    /**
     * \c option -  Includes the entries whose integral category is that specified 
     * by text in this switch's field-argument.
     */
    readonly specifiedIntegralCategory?: string;

    /**
     * \d option - When used with \s, the text in this switch's field-argument defines
     * the separator between sequence and page numbers. If \d is not defined, the default separator is used: hyphen (-).
     */
    readonly sequenceAndPageNumbersSeparator?: string;

    /** 
     * \e option - text in this switch's field-argument specifies the character sequence 
     * that separates a table of authorities entry and its page number. 
     * If \e is not specified, a tab stop with leader dots is used.
     */

    readonly entryAndPageNumberSeparator?: string;

    /**
     * \f option - Removes the formatting of the entry text in the document 
     * from the entry in the table of authorities.
     */
    readonly removeFormatting?: boolean;

    /**
     * \g option - text in this switch's field-argument specifies 
     * the character sequence that separates the pages in a page range. 
     * If \g is omitted, an en dash (–) is used.
     */

    readonly pageNumberSeparator?: string;

    /**
     * \h option - Includes the category heading for the entries in a table of authorities.
     */

    readonly showCategoryHeading?: boolean;

    /**
     * \l option - text in this switch's field-argument specifies the 
     * character sequence that separates multiple page references. 
     * If \l is omitted, a comma (,) and space are used.
     */
    readonly multiplePageReferenceSeparator?: string;

    /**
     * \p option - Replaces five or more different page references to the same authority 
     * with "passim", which is used to indicate that a word or passage occurs frequently 
     * in the work cited.
     */
    readonly passimReplacement?: boolean;

    /**
     * \s option - Includes a case or section number before the page number. 
     * The entry shall be numbered with a SEQ field (§17.16.5.56), and text 
     * in this switch's field-argument shall match the identifier in the SEQ field.
     */
    readonly seqFieldIdentifierForPrefix?: string;
}
