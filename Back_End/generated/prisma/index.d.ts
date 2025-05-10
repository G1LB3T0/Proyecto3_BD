
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categoria
 * 
 */
export type categoria = $Result.DefaultSelection<Prisma.$categoriaPayload>
/**
 * Model editorial
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type editorial = $Result.DefaultSelection<Prisma.$editorialPayload>
/**
 * Model historial_acceso
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type historial_acceso = $Result.DefaultSelection<Prisma.$historial_accesoPayload>
/**
 * Model libro
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type libro = $Result.DefaultSelection<Prisma.$libroPayload>
/**
 * Model prestamo
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type prestamo = $Result.DefaultSelection<Prisma.$prestamoPayload>
/**
 * Model prestamo_unidadlibro
 * 
 */
export type prestamo_unidadlibro = $Result.DefaultSelection<Prisma.$prestamo_unidadlibroPayload>
/**
 * Model reserva
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reserva = $Result.DefaultSelection<Prisma.$reservaPayload>
/**
 * Model unidadlibro
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type unidadlibro = $Result.DefaultSelection<Prisma.$unidadlibroPayload>
/**
 * Model usuario
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model usuario_categoria_interes
 * 
 */
export type usuario_categoria_interes = $Result.DefaultSelection<Prisma.$usuario_categoria_interesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.categoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editorial`: Exposes CRUD operations for the **editorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Editorials
    * const editorials = await prisma.editorial.findMany()
    * ```
    */
  get editorial(): Prisma.editorialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial_acceso`: Exposes CRUD operations for the **historial_acceso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_accesos
    * const historial_accesos = await prisma.historial_acceso.findMany()
    * ```
    */
  get historial_acceso(): Prisma.historial_accesoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libro`: Exposes CRUD operations for the **libro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libros
    * const libros = await prisma.libro.findMany()
    * ```
    */
  get libro(): Prisma.libroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamo`: Exposes CRUD operations for the **prestamo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamos
    * const prestamos = await prisma.prestamo.findMany()
    * ```
    */
  get prestamo(): Prisma.prestamoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prestamo_unidadlibro`: Exposes CRUD operations for the **prestamo_unidadlibro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prestamo_unidadlibros
    * const prestamo_unidadlibros = await prisma.prestamo_unidadlibro.findMany()
    * ```
    */
  get prestamo_unidadlibro(): Prisma.prestamo_unidadlibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.reservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidadlibro`: Exposes CRUD operations for the **unidadlibro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidadlibros
    * const unidadlibros = await prisma.unidadlibro.findMany()
    * ```
    */
  get unidadlibro(): Prisma.unidadlibroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario_categoria_interes`: Exposes CRUD operations for the **usuario_categoria_interes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuario_categoria_interes
    * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findMany()
    * ```
    */
  get usuario_categoria_interes(): Prisma.usuario_categoria_interesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categoria: 'categoria',
    editorial: 'editorial',
    historial_acceso: 'historial_acceso',
    libro: 'libro',
    prestamo: 'prestamo',
    prestamo_unidadlibro: 'prestamo_unidadlibro',
    reserva: 'reserva',
    unidadlibro: 'unidadlibro',
    usuario: 'usuario',
    usuario_categoria_interes: 'usuario_categoria_interes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "editorial" | "historial_acceso" | "libro" | "prestamo" | "prestamo_unidadlibro" | "reserva" | "unidadlibro" | "usuario" | "usuario_categoria_interes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoria: {
        payload: Prisma.$categoriaPayload<ExtArgs>
        fields: Prisma.categoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findFirst: {
            args: Prisma.categoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          findMany: {
            args: Prisma.categoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          create: {
            args: Prisma.categoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          createMany: {
            args: Prisma.categoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          delete: {
            args: Prisma.categoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          update: {
            args: Prisma.categoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          deleteMany: {
            args: Prisma.categoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>[]
          }
          upsert: {
            args: Prisma.categoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.categoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      editorial: {
        payload: Prisma.$editorialPayload<ExtArgs>
        fields: Prisma.editorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.editorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.editorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          findFirst: {
            args: Prisma.editorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.editorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          findMany: {
            args: Prisma.editorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>[]
          }
          create: {
            args: Prisma.editorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          createMany: {
            args: Prisma.editorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.editorialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>[]
          }
          delete: {
            args: Prisma.editorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          update: {
            args: Prisma.editorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          deleteMany: {
            args: Prisma.editorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.editorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.editorialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>[]
          }
          upsert: {
            args: Prisma.editorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$editorialPayload>
          }
          aggregate: {
            args: Prisma.EditorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditorial>
          }
          groupBy: {
            args: Prisma.editorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.editorialCountArgs<ExtArgs>
            result: $Utils.Optional<EditorialCountAggregateOutputType> | number
          }
        }
      }
      historial_acceso: {
        payload: Prisma.$historial_accesoPayload<ExtArgs>
        fields: Prisma.historial_accesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historial_accesoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historial_accesoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          findFirst: {
            args: Prisma.historial_accesoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historial_accesoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          findMany: {
            args: Prisma.historial_accesoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>[]
          }
          create: {
            args: Prisma.historial_accesoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          createMany: {
            args: Prisma.historial_accesoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.historial_accesoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>[]
          }
          delete: {
            args: Prisma.historial_accesoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          update: {
            args: Prisma.historial_accesoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          deleteMany: {
            args: Prisma.historial_accesoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historial_accesoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.historial_accesoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>[]
          }
          upsert: {
            args: Prisma.historial_accesoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_accesoPayload>
          }
          aggregate: {
            args: Prisma.Historial_accesoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial_acceso>
          }
          groupBy: {
            args: Prisma.historial_accesoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historial_accesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.historial_accesoCountArgs<ExtArgs>
            result: $Utils.Optional<Historial_accesoCountAggregateOutputType> | number
          }
        }
      }
      libro: {
        payload: Prisma.$libroPayload<ExtArgs>
        fields: Prisma.libroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.libroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.libroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          findFirst: {
            args: Prisma.libroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.libroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          findMany: {
            args: Prisma.libroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>[]
          }
          create: {
            args: Prisma.libroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          createMany: {
            args: Prisma.libroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.libroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>[]
          }
          delete: {
            args: Prisma.libroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          update: {
            args: Prisma.libroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          deleteMany: {
            args: Prisma.libroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.libroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.libroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>[]
          }
          upsert: {
            args: Prisma.libroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$libroPayload>
          }
          aggregate: {
            args: Prisma.LibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibro>
          }
          groupBy: {
            args: Prisma.libroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.libroCountArgs<ExtArgs>
            result: $Utils.Optional<LibroCountAggregateOutputType> | number
          }
        }
      }
      prestamo: {
        payload: Prisma.$prestamoPayload<ExtArgs>
        fields: Prisma.prestamoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestamoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestamoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          findFirst: {
            args: Prisma.prestamoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestamoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          findMany: {
            args: Prisma.prestamoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>[]
          }
          create: {
            args: Prisma.prestamoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          createMany: {
            args: Prisma.prestamoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prestamoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>[]
          }
          delete: {
            args: Prisma.prestamoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          update: {
            args: Prisma.prestamoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          deleteMany: {
            args: Prisma.prestamoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestamoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prestamoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>[]
          }
          upsert: {
            args: Prisma.prestamoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamoPayload>
          }
          aggregate: {
            args: Prisma.PrestamoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamo>
          }
          groupBy: {
            args: Prisma.prestamoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrestamoGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestamoCountArgs<ExtArgs>
            result: $Utils.Optional<PrestamoCountAggregateOutputType> | number
          }
        }
      }
      prestamo_unidadlibro: {
        payload: Prisma.$prestamo_unidadlibroPayload<ExtArgs>
        fields: Prisma.prestamo_unidadlibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prestamo_unidadlibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prestamo_unidadlibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          findFirst: {
            args: Prisma.prestamo_unidadlibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prestamo_unidadlibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          findMany: {
            args: Prisma.prestamo_unidadlibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>[]
          }
          create: {
            args: Prisma.prestamo_unidadlibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          createMany: {
            args: Prisma.prestamo_unidadlibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prestamo_unidadlibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>[]
          }
          delete: {
            args: Prisma.prestamo_unidadlibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          update: {
            args: Prisma.prestamo_unidadlibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          deleteMany: {
            args: Prisma.prestamo_unidadlibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prestamo_unidadlibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prestamo_unidadlibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>[]
          }
          upsert: {
            args: Prisma.prestamo_unidadlibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prestamo_unidadlibroPayload>
          }
          aggregate: {
            args: Prisma.Prestamo_unidadlibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrestamo_unidadlibro>
          }
          groupBy: {
            args: Prisma.prestamo_unidadlibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<Prestamo_unidadlibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.prestamo_unidadlibroCountArgs<ExtArgs>
            result: $Utils.Optional<Prestamo_unidadlibroCountAggregateOutputType> | number
          }
        }
      }
      reserva: {
        payload: Prisma.$reservaPayload<ExtArgs>
        fields: Prisma.reservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findFirst: {
            args: Prisma.reservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findMany: {
            args: Prisma.reservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          create: {
            args: Prisma.reservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          createMany: {
            args: Prisma.reservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          delete: {
            args: Prisma.reservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          update: {
            args: Prisma.reservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          deleteMany: {
            args: Prisma.reservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          upsert: {
            args: Prisma.reservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.reservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      unidadlibro: {
        payload: Prisma.$unidadlibroPayload<ExtArgs>
        fields: Prisma.unidadlibroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.unidadlibroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.unidadlibroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          findFirst: {
            args: Prisma.unidadlibroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.unidadlibroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          findMany: {
            args: Prisma.unidadlibroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>[]
          }
          create: {
            args: Prisma.unidadlibroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          createMany: {
            args: Prisma.unidadlibroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.unidadlibroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>[]
          }
          delete: {
            args: Prisma.unidadlibroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          update: {
            args: Prisma.unidadlibroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          deleteMany: {
            args: Prisma.unidadlibroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.unidadlibroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.unidadlibroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>[]
          }
          upsert: {
            args: Prisma.unidadlibroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$unidadlibroPayload>
          }
          aggregate: {
            args: Prisma.UnidadlibroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidadlibro>
          }
          groupBy: {
            args: Prisma.unidadlibroGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadlibroGroupByOutputType>[]
          }
          count: {
            args: Prisma.unidadlibroCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadlibroCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      usuario_categoria_interes: {
        payload: Prisma.$usuario_categoria_interesPayload<ExtArgs>
        fields: Prisma.usuario_categoria_interesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuario_categoria_interesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuario_categoria_interesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          findFirst: {
            args: Prisma.usuario_categoria_interesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuario_categoria_interesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          findMany: {
            args: Prisma.usuario_categoria_interesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>[]
          }
          create: {
            args: Prisma.usuario_categoria_interesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          createMany: {
            args: Prisma.usuario_categoria_interesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuario_categoria_interesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>[]
          }
          delete: {
            args: Prisma.usuario_categoria_interesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          update: {
            args: Prisma.usuario_categoria_interesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          deleteMany: {
            args: Prisma.usuario_categoria_interesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuario_categoria_interesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuario_categoria_interesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>[]
          }
          upsert: {
            args: Prisma.usuario_categoria_interesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuario_categoria_interesPayload>
          }
          aggregate: {
            args: Prisma.Usuario_categoria_interesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario_categoria_interes>
          }
          groupBy: {
            args: Prisma.usuario_categoria_interesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Usuario_categoria_interesGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuario_categoria_interesCountArgs<ExtArgs>
            result: $Utils.Optional<Usuario_categoria_interesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categoria?: categoriaOmit
    editorial?: editorialOmit
    historial_acceso?: historial_accesoOmit
    libro?: libroOmit
    prestamo?: prestamoOmit
    prestamo_unidadlibro?: prestamo_unidadlibroOmit
    reserva?: reservaOmit
    unidadlibro?: unidadlibroOmit
    usuario?: usuarioOmit
    usuario_categoria_interes?: usuario_categoria_interesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    libro: number
    usuario_categoria_interes: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | CategoriaCountOutputTypeCountLibroArgs
    usuario_categoria_interes?: boolean | CategoriaCountOutputTypeCountUsuario_categoria_interesArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountLibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountUsuario_categoria_interesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_categoria_interesWhereInput
  }


  /**
   * Count Type EditorialCountOutputType
   */

  export type EditorialCountOutputType = {
    libro: number
  }

  export type EditorialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | EditorialCountOutputTypeCountLibroArgs
  }

  // Custom InputTypes
  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialCountOutputType
     */
    select?: EditorialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EditorialCountOutputType without action
   */
  export type EditorialCountOutputTypeCountLibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
  }


  /**
   * Count Type LibroCountOutputType
   */

  export type LibroCountOutputType = {
    historial_acceso: number
    unidadlibro: number
  }

  export type LibroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_acceso?: boolean | LibroCountOutputTypeCountHistorial_accesoArgs
    unidadlibro?: boolean | LibroCountOutputTypeCountUnidadlibroArgs
  }

  // Custom InputTypes
  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibroCountOutputType
     */
    select?: LibroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountHistorial_accesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_accesoWhereInput
  }

  /**
   * LibroCountOutputType without action
   */
  export type LibroCountOutputTypeCountUnidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unidadlibroWhereInput
  }


  /**
   * Count Type PrestamoCountOutputType
   */

  export type PrestamoCountOutputType = {
    prestamo_unidadlibro: number
  }

  export type PrestamoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo_unidadlibro?: boolean | PrestamoCountOutputTypeCountPrestamo_unidadlibroArgs
  }

  // Custom InputTypes
  /**
   * PrestamoCountOutputType without action
   */
  export type PrestamoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrestamoCountOutputType
     */
    select?: PrestamoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrestamoCountOutputType without action
   */
  export type PrestamoCountOutputTypeCountPrestamo_unidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamo_unidadlibroWhereInput
  }


  /**
   * Count Type UnidadlibroCountOutputType
   */

  export type UnidadlibroCountOutputType = {
    prestamo_unidadlibro: number
    reserva: number
  }

  export type UnidadlibroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo_unidadlibro?: boolean | UnidadlibroCountOutputTypeCountPrestamo_unidadlibroArgs
    reserva?: boolean | UnidadlibroCountOutputTypeCountReservaArgs
  }

  // Custom InputTypes
  /**
   * UnidadlibroCountOutputType without action
   */
  export type UnidadlibroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadlibroCountOutputType
     */
    select?: UnidadlibroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadlibroCountOutputType without action
   */
  export type UnidadlibroCountOutputTypeCountPrestamo_unidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamo_unidadlibroWhereInput
  }

  /**
   * UnidadlibroCountOutputType without action
   */
  export type UnidadlibroCountOutputTypeCountReservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    historial_acceso: number
    prestamo: number
    reserva: number
    usuario_categoria_interes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_acceso?: boolean | UsuarioCountOutputTypeCountHistorial_accesoArgs
    prestamo?: boolean | UsuarioCountOutputTypeCountPrestamoArgs
    reserva?: boolean | UsuarioCountOutputTypeCountReservaArgs
    usuario_categoria_interes?: boolean | UsuarioCountOutputTypeCountUsuario_categoria_interesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorial_accesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_accesoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPrestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountUsuario_categoria_interesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_categoria_interesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    descripcion: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id_categoria: number | null
    nombre_categoria: string | null
    descripcion: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id_categoria: number
    nombre_categoria: number
    descripcion: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriaMinAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
  }

  export type CategoriaCountAggregateInputType = {
    id_categoria?: true
    nombre_categoria?: true
    descripcion?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoria to aggregate.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type categoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriaWhereInput
    orderBy?: categoriaOrderByWithAggregationInput | categoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: categoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id_categoria: number
    nombre_categoria: string
    descripcion: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends categoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type categoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
    libro?: boolean | categoria$libroArgs<ExtArgs>
    usuario_categoria_interes?: boolean | categoria$usuario_categoria_interesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type categoriaSelectScalar = {
    id_categoria?: boolean
    nombre_categoria?: boolean
    descripcion?: boolean
  }

  export type categoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre_categoria" | "descripcion", ExtArgs["result"]["categoria"]>
  export type categoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | categoria$libroArgs<ExtArgs>
    usuario_categoria_interes?: boolean | categoria$usuario_categoria_interesArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoria"
    objects: {
      libro: Prisma.$libroPayload<ExtArgs>[]
      usuario_categoria_interes: Prisma.$usuario_categoria_interesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: number
      nombre_categoria: string
      descripcion: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type categoriaGetPayload<S extends boolean | null | undefined | categoriaDefaultArgs> = $Result.GetResult<Prisma.$categoriaPayload, S>

  type categoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface categoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoria'], meta: { name: 'categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {categoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriaFindUniqueArgs>(args: SelectSubset<T, categoriaFindUniqueArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriaFindFirstArgs>(args?: SelectSubset<T, categoriaFindFirstArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriaFindManyArgs>(args?: SelectSubset<T, categoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {categoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends categoriaCreateArgs>(args: SelectSubset<T, categoriaCreateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriaCreateManyArgs>(args?: SelectSubset<T, categoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {categoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends categoriaDeleteArgs>(args: SelectSubset<T, categoriaDeleteArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {categoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriaUpdateArgs>(args: SelectSubset<T, categoriaUpdateArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriaDeleteManyArgs>(args?: SelectSubset<T, categoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriaUpdateManyArgs>(args: SelectSubset<T, categoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriaWithId_categoriaOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id_categoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {categoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends categoriaUpsertArgs>(args: SelectSubset<T, categoriaUpsertArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriaCountArgs>(
      args?: Subset<T, categoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriaGroupByArgs['orderBy'] }
        : { orderBy?: categoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoria model
   */
  readonly fields: categoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends categoria$libroArgs<ExtArgs> = {}>(args?: Subset<T, categoria$libroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_categoria_interes<T extends categoria$usuario_categoria_interesArgs<ExtArgs> = {}>(args?: Subset<T, categoria$usuario_categoria_interesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoria model
   */
  interface categoriaFieldRefs {
    readonly id_categoria: FieldRef<"categoria", 'Int'>
    readonly nombre_categoria: FieldRef<"categoria", 'String'>
    readonly descripcion: FieldRef<"categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoria findUnique
   */
  export type categoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findUniqueOrThrow
   */
  export type categoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria findFirst
   */
  export type categoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findFirstOrThrow
   */
  export type categoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categoria to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria findMany
   */
  export type categoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriaOrderByWithRelationInput | categoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * categoria create
   */
  export type categoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a categoria.
     */
    data: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
  }

  /**
   * categoria createMany
   */
  export type categoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria createManyAndReturn
   */
  export type categoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriaCreateManyInput | categoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoria update
   */
  export type categoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a categoria.
     */
    data: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
    /**
     * Choose, which categoria to update.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria updateMany
   */
  export type categoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria updateManyAndReturn
   */
  export type categoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriaUpdateManyMutationInput, categoriaUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categoria upsert
   */
  export type categoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the categoria to update in case it exists.
     */
    where: categoriaWhereUniqueInput
    /**
     * In case the categoria found by the `where` argument doesn't exist, create a new categoria with this data.
     */
    create: XOR<categoriaCreateInput, categoriaUncheckedCreateInput>
    /**
     * In case the categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriaUpdateInput, categoriaUncheckedUpdateInput>
  }

  /**
   * categoria delete
   */
  export type categoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
    /**
     * Filter which categoria to delete.
     */
    where: categoriaWhereUniqueInput
  }

  /**
   * categoria deleteMany
   */
  export type categoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriaWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categoria.libro
   */
  export type categoria$libroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    where?: libroWhereInput
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    cursor?: libroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * categoria.usuario_categoria_interes
   */
  export type categoria$usuario_categoria_interesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    where?: usuario_categoria_interesWhereInput
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    cursor?: usuario_categoria_interesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_categoria_interesScalarFieldEnum | Usuario_categoria_interesScalarFieldEnum[]
  }

  /**
   * categoria without action
   */
  export type categoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoria
     */
    select?: categoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categoria
     */
    omit?: categoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriaInclude<ExtArgs> | null
  }


  /**
   * Model editorial
   */

  export type AggregateEditorial = {
    _count: EditorialCountAggregateOutputType | null
    _avg: EditorialAvgAggregateOutputType | null
    _sum: EditorialSumAggregateOutputType | null
    _min: EditorialMinAggregateOutputType | null
    _max: EditorialMaxAggregateOutputType | null
  }

  export type EditorialAvgAggregateOutputType = {
    id_editorial: number | null
    anio_fundacion: number | null
  }

  export type EditorialSumAggregateOutputType = {
    id_editorial: number | null
    anio_fundacion: number | null
  }

  export type EditorialMinAggregateOutputType = {
    id_editorial: number | null
    nombre: string | null
    pais: string | null
    anio_fundacion: number | null
  }

  export type EditorialMaxAggregateOutputType = {
    id_editorial: number | null
    nombre: string | null
    pais: string | null
    anio_fundacion: number | null
  }

  export type EditorialCountAggregateOutputType = {
    id_editorial: number
    nombre: number
    pais: number
    anio_fundacion: number
    _all: number
  }


  export type EditorialAvgAggregateInputType = {
    id_editorial?: true
    anio_fundacion?: true
  }

  export type EditorialSumAggregateInputType = {
    id_editorial?: true
    anio_fundacion?: true
  }

  export type EditorialMinAggregateInputType = {
    id_editorial?: true
    nombre?: true
    pais?: true
    anio_fundacion?: true
  }

  export type EditorialMaxAggregateInputType = {
    id_editorial?: true
    nombre?: true
    pais?: true
    anio_fundacion?: true
  }

  export type EditorialCountAggregateInputType = {
    id_editorial?: true
    nombre?: true
    pais?: true
    anio_fundacion?: true
    _all?: true
  }

  export type EditorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editorial to aggregate.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned editorials
    **/
    _count?: true | EditorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorialMaxAggregateInputType
  }

  export type GetEditorialAggregateType<T extends EditorialAggregateArgs> = {
        [P in keyof T & keyof AggregateEditorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditorial[P]>
      : GetScalarType<T[P], AggregateEditorial[P]>
  }




  export type editorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: editorialWhereInput
    orderBy?: editorialOrderByWithAggregationInput | editorialOrderByWithAggregationInput[]
    by: EditorialScalarFieldEnum[] | EditorialScalarFieldEnum
    having?: editorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorialCountAggregateInputType | true
    _avg?: EditorialAvgAggregateInputType
    _sum?: EditorialSumAggregateInputType
    _min?: EditorialMinAggregateInputType
    _max?: EditorialMaxAggregateInputType
  }

  export type EditorialGroupByOutputType = {
    id_editorial: number
    nombre: string
    pais: string
    anio_fundacion: number | null
    _count: EditorialCountAggregateOutputType | null
    _avg: EditorialAvgAggregateOutputType | null
    _sum: EditorialSumAggregateOutputType | null
    _min: EditorialMinAggregateOutputType | null
    _max: EditorialMaxAggregateOutputType | null
  }

  type GetEditorialGroupByPayload<T extends editorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorialGroupByOutputType[P]>
            : GetScalarType<T[P], EditorialGroupByOutputType[P]>
        }
      >
    >


  export type editorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_editorial?: boolean
    nombre?: boolean
    pais?: boolean
    anio_fundacion?: boolean
    libro?: boolean | editorial$libroArgs<ExtArgs>
    _count?: boolean | EditorialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editorial"]>

  export type editorialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_editorial?: boolean
    nombre?: boolean
    pais?: boolean
    anio_fundacion?: boolean
  }, ExtArgs["result"]["editorial"]>

  export type editorialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_editorial?: boolean
    nombre?: boolean
    pais?: boolean
    anio_fundacion?: boolean
  }, ExtArgs["result"]["editorial"]>

  export type editorialSelectScalar = {
    id_editorial?: boolean
    nombre?: boolean
    pais?: boolean
    anio_fundacion?: boolean
  }

  export type editorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_editorial" | "nombre" | "pais" | "anio_fundacion", ExtArgs["result"]["editorial"]>
  export type editorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | editorial$libroArgs<ExtArgs>
    _count?: boolean | EditorialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type editorialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type editorialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $editorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "editorial"
    objects: {
      libro: Prisma.$libroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_editorial: number
      nombre: string
      pais: string
      anio_fundacion: number | null
    }, ExtArgs["result"]["editorial"]>
    composites: {}
  }

  type editorialGetPayload<S extends boolean | null | undefined | editorialDefaultArgs> = $Result.GetResult<Prisma.$editorialPayload, S>

  type editorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<editorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditorialCountAggregateInputType | true
    }

  export interface editorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['editorial'], meta: { name: 'editorial' } }
    /**
     * Find zero or one Editorial that matches the filter.
     * @param {editorialFindUniqueArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends editorialFindUniqueArgs>(args: SelectSubset<T, editorialFindUniqueArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Editorial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {editorialFindUniqueOrThrowArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends editorialFindUniqueOrThrowArgs>(args: SelectSubset<T, editorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindFirstArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends editorialFindFirstArgs>(args?: SelectSubset<T, editorialFindFirstArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Editorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindFirstOrThrowArgs} args - Arguments to find a Editorial
     * @example
     * // Get one Editorial
     * const editorial = await prisma.editorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends editorialFindFirstOrThrowArgs>(args?: SelectSubset<T, editorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Editorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Editorials
     * const editorials = await prisma.editorial.findMany()
     * 
     * // Get first 10 Editorials
     * const editorials = await prisma.editorial.findMany({ take: 10 })
     * 
     * // Only select the `id_editorial`
     * const editorialWithId_editorialOnly = await prisma.editorial.findMany({ select: { id_editorial: true } })
     * 
     */
    findMany<T extends editorialFindManyArgs>(args?: SelectSubset<T, editorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Editorial.
     * @param {editorialCreateArgs} args - Arguments to create a Editorial.
     * @example
     * // Create one Editorial
     * const Editorial = await prisma.editorial.create({
     *   data: {
     *     // ... data to create a Editorial
     *   }
     * })
     * 
     */
    create<T extends editorialCreateArgs>(args: SelectSubset<T, editorialCreateArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Editorials.
     * @param {editorialCreateManyArgs} args - Arguments to create many Editorials.
     * @example
     * // Create many Editorials
     * const editorial = await prisma.editorial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends editorialCreateManyArgs>(args?: SelectSubset<T, editorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Editorials and returns the data saved in the database.
     * @param {editorialCreateManyAndReturnArgs} args - Arguments to create many Editorials.
     * @example
     * // Create many Editorials
     * const editorial = await prisma.editorial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Editorials and only return the `id_editorial`
     * const editorialWithId_editorialOnly = await prisma.editorial.createManyAndReturn({
     *   select: { id_editorial: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends editorialCreateManyAndReturnArgs>(args?: SelectSubset<T, editorialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Editorial.
     * @param {editorialDeleteArgs} args - Arguments to delete one Editorial.
     * @example
     * // Delete one Editorial
     * const Editorial = await prisma.editorial.delete({
     *   where: {
     *     // ... filter to delete one Editorial
     *   }
     * })
     * 
     */
    delete<T extends editorialDeleteArgs>(args: SelectSubset<T, editorialDeleteArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Editorial.
     * @param {editorialUpdateArgs} args - Arguments to update one Editorial.
     * @example
     * // Update one Editorial
     * const editorial = await prisma.editorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends editorialUpdateArgs>(args: SelectSubset<T, editorialUpdateArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Editorials.
     * @param {editorialDeleteManyArgs} args - Arguments to filter Editorials to delete.
     * @example
     * // Delete a few Editorials
     * const { count } = await prisma.editorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends editorialDeleteManyArgs>(args?: SelectSubset<T, editorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Editorials
     * const editorial = await prisma.editorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends editorialUpdateManyArgs>(args: SelectSubset<T, editorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Editorials and returns the data updated in the database.
     * @param {editorialUpdateManyAndReturnArgs} args - Arguments to update many Editorials.
     * @example
     * // Update many Editorials
     * const editorial = await prisma.editorial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Editorials and only return the `id_editorial`
     * const editorialWithId_editorialOnly = await prisma.editorial.updateManyAndReturn({
     *   select: { id_editorial: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends editorialUpdateManyAndReturnArgs>(args: SelectSubset<T, editorialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Editorial.
     * @param {editorialUpsertArgs} args - Arguments to update or create a Editorial.
     * @example
     * // Update or create a Editorial
     * const editorial = await prisma.editorial.upsert({
     *   create: {
     *     // ... data to create a Editorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Editorial we want to update
     *   }
     * })
     */
    upsert<T extends editorialUpsertArgs>(args: SelectSubset<T, editorialUpsertArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Editorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialCountArgs} args - Arguments to filter Editorials to count.
     * @example
     * // Count the number of Editorials
     * const count = await prisma.editorial.count({
     *   where: {
     *     // ... the filter for the Editorials we want to count
     *   }
     * })
    **/
    count<T extends editorialCountArgs>(
      args?: Subset<T, editorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Editorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorialAggregateArgs>(args: Subset<T, EditorialAggregateArgs>): Prisma.PrismaPromise<GetEditorialAggregateType<T>>

    /**
     * Group by Editorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {editorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends editorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: editorialGroupByArgs['orderBy'] }
        : { orderBy?: editorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, editorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the editorial model
   */
  readonly fields: editorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for editorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__editorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends editorial$libroArgs<ExtArgs> = {}>(args?: Subset<T, editorial$libroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the editorial model
   */
  interface editorialFieldRefs {
    readonly id_editorial: FieldRef<"editorial", 'Int'>
    readonly nombre: FieldRef<"editorial", 'String'>
    readonly pais: FieldRef<"editorial", 'String'>
    readonly anio_fundacion: FieldRef<"editorial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * editorial findUnique
   */
  export type editorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where: editorialWhereUniqueInput
  }

  /**
   * editorial findUniqueOrThrow
   */
  export type editorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where: editorialWhereUniqueInput
  }

  /**
   * editorial findFirst
   */
  export type editorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editorials.
     */
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }

  /**
   * editorial findFirstOrThrow
   */
  export type editorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorial to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of editorials.
     */
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }

  /**
   * editorial findMany
   */
  export type editorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter, which editorials to fetch.
     */
    where?: editorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of editorials to fetch.
     */
    orderBy?: editorialOrderByWithRelationInput | editorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing editorials.
     */
    cursor?: editorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` editorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` editorials.
     */
    skip?: number
    distinct?: EditorialScalarFieldEnum | EditorialScalarFieldEnum[]
  }

  /**
   * editorial create
   */
  export type editorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The data needed to create a editorial.
     */
    data: XOR<editorialCreateInput, editorialUncheckedCreateInput>
  }

  /**
   * editorial createMany
   */
  export type editorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many editorials.
     */
    data: editorialCreateManyInput | editorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * editorial createManyAndReturn
   */
  export type editorialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * The data used to create many editorials.
     */
    data: editorialCreateManyInput | editorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * editorial update
   */
  export type editorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The data needed to update a editorial.
     */
    data: XOR<editorialUpdateInput, editorialUncheckedUpdateInput>
    /**
     * Choose, which editorial to update.
     */
    where: editorialWhereUniqueInput
  }

  /**
   * editorial updateMany
   */
  export type editorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update editorials.
     */
    data: XOR<editorialUpdateManyMutationInput, editorialUncheckedUpdateManyInput>
    /**
     * Filter which editorials to update
     */
    where?: editorialWhereInput
    /**
     * Limit how many editorials to update.
     */
    limit?: number
  }

  /**
   * editorial updateManyAndReturn
   */
  export type editorialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * The data used to update editorials.
     */
    data: XOR<editorialUpdateManyMutationInput, editorialUncheckedUpdateManyInput>
    /**
     * Filter which editorials to update
     */
    where?: editorialWhereInput
    /**
     * Limit how many editorials to update.
     */
    limit?: number
  }

  /**
   * editorial upsert
   */
  export type editorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * The filter to search for the editorial to update in case it exists.
     */
    where: editorialWhereUniqueInput
    /**
     * In case the editorial found by the `where` argument doesn't exist, create a new editorial with this data.
     */
    create: XOR<editorialCreateInput, editorialUncheckedCreateInput>
    /**
     * In case the editorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<editorialUpdateInput, editorialUncheckedUpdateInput>
  }

  /**
   * editorial delete
   */
  export type editorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
    /**
     * Filter which editorial to delete.
     */
    where: editorialWhereUniqueInput
  }

  /**
   * editorial deleteMany
   */
  export type editorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which editorials to delete
     */
    where?: editorialWhereInput
    /**
     * Limit how many editorials to delete.
     */
    limit?: number
  }

  /**
   * editorial.libro
   */
  export type editorial$libroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    where?: libroWhereInput
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    cursor?: libroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * editorial without action
   */
  export type editorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the editorial
     */
    select?: editorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the editorial
     */
    omit?: editorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: editorialInclude<ExtArgs> | null
  }


  /**
   * Model historial_acceso
   */

  export type AggregateHistorial_acceso = {
    _count: Historial_accesoCountAggregateOutputType | null
    _avg: Historial_accesoAvgAggregateOutputType | null
    _sum: Historial_accesoSumAggregateOutputType | null
    _min: Historial_accesoMinAggregateOutputType | null
    _max: Historial_accesoMaxAggregateOutputType | null
  }

  export type Historial_accesoAvgAggregateOutputType = {
    id_acceso: number | null
    id_usuario: number | null
    id_libro: number | null
  }

  export type Historial_accesoSumAggregateOutputType = {
    id_acceso: number | null
    id_usuario: number | null
    id_libro: number | null
  }

  export type Historial_accesoMinAggregateOutputType = {
    id_acceso: number | null
    id_usuario: number | null
    id_libro: number | null
    fecha_consulta: Date | null
    tipo_acceso: string | null
  }

  export type Historial_accesoMaxAggregateOutputType = {
    id_acceso: number | null
    id_usuario: number | null
    id_libro: number | null
    fecha_consulta: Date | null
    tipo_acceso: string | null
  }

  export type Historial_accesoCountAggregateOutputType = {
    id_acceso: number
    id_usuario: number
    id_libro: number
    fecha_consulta: number
    tipo_acceso: number
    _all: number
  }


  export type Historial_accesoAvgAggregateInputType = {
    id_acceso?: true
    id_usuario?: true
    id_libro?: true
  }

  export type Historial_accesoSumAggregateInputType = {
    id_acceso?: true
    id_usuario?: true
    id_libro?: true
  }

  export type Historial_accesoMinAggregateInputType = {
    id_acceso?: true
    id_usuario?: true
    id_libro?: true
    fecha_consulta?: true
    tipo_acceso?: true
  }

  export type Historial_accesoMaxAggregateInputType = {
    id_acceso?: true
    id_usuario?: true
    id_libro?: true
    fecha_consulta?: true
    tipo_acceso?: true
  }

  export type Historial_accesoCountAggregateInputType = {
    id_acceso?: true
    id_usuario?: true
    id_libro?: true
    fecha_consulta?: true
    tipo_acceso?: true
    _all?: true
  }

  export type Historial_accesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_acceso to aggregate.
     */
    where?: historial_accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_accesos to fetch.
     */
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_accesos
    **/
    _count?: true | Historial_accesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_accesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_accesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_accesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_accesoMaxAggregateInputType
  }

  export type GetHistorial_accesoAggregateType<T extends Historial_accesoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_acceso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_acceso[P]>
      : GetScalarType<T[P], AggregateHistorial_acceso[P]>
  }




  export type historial_accesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_accesoWhereInput
    orderBy?: historial_accesoOrderByWithAggregationInput | historial_accesoOrderByWithAggregationInput[]
    by: Historial_accesoScalarFieldEnum[] | Historial_accesoScalarFieldEnum
    having?: historial_accesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_accesoCountAggregateInputType | true
    _avg?: Historial_accesoAvgAggregateInputType
    _sum?: Historial_accesoSumAggregateInputType
    _min?: Historial_accesoMinAggregateInputType
    _max?: Historial_accesoMaxAggregateInputType
  }

  export type Historial_accesoGroupByOutputType = {
    id_acceso: number
    id_usuario: number
    id_libro: number
    fecha_consulta: Date | null
    tipo_acceso: string | null
    _count: Historial_accesoCountAggregateOutputType | null
    _avg: Historial_accesoAvgAggregateOutputType | null
    _sum: Historial_accesoSumAggregateOutputType | null
    _min: Historial_accesoMinAggregateOutputType | null
    _max: Historial_accesoMaxAggregateOutputType | null
  }

  type GetHistorial_accesoGroupByPayload<T extends historial_accesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_accesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_accesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_accesoGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_accesoGroupByOutputType[P]>
        }
      >
    >


  export type historial_accesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acceso?: boolean
    id_usuario?: boolean
    id_libro?: boolean
    fecha_consulta?: boolean
    tipo_acceso?: boolean
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_acceso"]>

  export type historial_accesoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acceso?: boolean
    id_usuario?: boolean
    id_libro?: boolean
    fecha_consulta?: boolean
    tipo_acceso?: boolean
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_acceso"]>

  export type historial_accesoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_acceso?: boolean
    id_usuario?: boolean
    id_libro?: boolean
    fecha_consulta?: boolean
    tipo_acceso?: boolean
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historial_acceso"]>

  export type historial_accesoSelectScalar = {
    id_acceso?: boolean
    id_usuario?: boolean
    id_libro?: boolean
    fecha_consulta?: boolean
    tipo_acceso?: boolean
  }

  export type historial_accesoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_acceso" | "id_usuario" | "id_libro" | "fecha_consulta" | "tipo_acceso", ExtArgs["result"]["historial_acceso"]>
  export type historial_accesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type historial_accesoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type historial_accesoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | libroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $historial_accesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historial_acceso"
    objects: {
      libro: Prisma.$libroPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_acceso: number
      id_usuario: number
      id_libro: number
      fecha_consulta: Date | null
      tipo_acceso: string | null
    }, ExtArgs["result"]["historial_acceso"]>
    composites: {}
  }

  type historial_accesoGetPayload<S extends boolean | null | undefined | historial_accesoDefaultArgs> = $Result.GetResult<Prisma.$historial_accesoPayload, S>

  type historial_accesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historial_accesoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historial_accesoCountAggregateInputType | true
    }

  export interface historial_accesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_acceso'], meta: { name: 'historial_acceso' } }
    /**
     * Find zero or one Historial_acceso that matches the filter.
     * @param {historial_accesoFindUniqueArgs} args - Arguments to find a Historial_acceso
     * @example
     * // Get one Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historial_accesoFindUniqueArgs>(args: SelectSubset<T, historial_accesoFindUniqueArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial_acceso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historial_accesoFindUniqueOrThrowArgs} args - Arguments to find a Historial_acceso
     * @example
     * // Get one Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historial_accesoFindUniqueOrThrowArgs>(args: SelectSubset<T, historial_accesoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_acceso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoFindFirstArgs} args - Arguments to find a Historial_acceso
     * @example
     * // Get one Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historial_accesoFindFirstArgs>(args?: SelectSubset<T, historial_accesoFindFirstArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_acceso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoFindFirstOrThrowArgs} args - Arguments to find a Historial_acceso
     * @example
     * // Get one Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historial_accesoFindFirstOrThrowArgs>(args?: SelectSubset<T, historial_accesoFindFirstOrThrowArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historial_accesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_accesos
     * const historial_accesos = await prisma.historial_acceso.findMany()
     * 
     * // Get first 10 Historial_accesos
     * const historial_accesos = await prisma.historial_acceso.findMany({ take: 10 })
     * 
     * // Only select the `id_acceso`
     * const historial_accesoWithId_accesoOnly = await prisma.historial_acceso.findMany({ select: { id_acceso: true } })
     * 
     */
    findMany<T extends historial_accesoFindManyArgs>(args?: SelectSubset<T, historial_accesoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial_acceso.
     * @param {historial_accesoCreateArgs} args - Arguments to create a Historial_acceso.
     * @example
     * // Create one Historial_acceso
     * const Historial_acceso = await prisma.historial_acceso.create({
     *   data: {
     *     // ... data to create a Historial_acceso
     *   }
     * })
     * 
     */
    create<T extends historial_accesoCreateArgs>(args: SelectSubset<T, historial_accesoCreateArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historial_accesos.
     * @param {historial_accesoCreateManyArgs} args - Arguments to create many Historial_accesos.
     * @example
     * // Create many Historial_accesos
     * const historial_acceso = await prisma.historial_acceso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historial_accesoCreateManyArgs>(args?: SelectSubset<T, historial_accesoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historial_accesos and returns the data saved in the database.
     * @param {historial_accesoCreateManyAndReturnArgs} args - Arguments to create many Historial_accesos.
     * @example
     * // Create many Historial_accesos
     * const historial_acceso = await prisma.historial_acceso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historial_accesos and only return the `id_acceso`
     * const historial_accesoWithId_accesoOnly = await prisma.historial_acceso.createManyAndReturn({
     *   select: { id_acceso: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends historial_accesoCreateManyAndReturnArgs>(args?: SelectSubset<T, historial_accesoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historial_acceso.
     * @param {historial_accesoDeleteArgs} args - Arguments to delete one Historial_acceso.
     * @example
     * // Delete one Historial_acceso
     * const Historial_acceso = await prisma.historial_acceso.delete({
     *   where: {
     *     // ... filter to delete one Historial_acceso
     *   }
     * })
     * 
     */
    delete<T extends historial_accesoDeleteArgs>(args: SelectSubset<T, historial_accesoDeleteArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial_acceso.
     * @param {historial_accesoUpdateArgs} args - Arguments to update one Historial_acceso.
     * @example
     * // Update one Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historial_accesoUpdateArgs>(args: SelectSubset<T, historial_accesoUpdateArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historial_accesos.
     * @param {historial_accesoDeleteManyArgs} args - Arguments to filter Historial_accesos to delete.
     * @example
     * // Delete a few Historial_accesos
     * const { count } = await prisma.historial_acceso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historial_accesoDeleteManyArgs>(args?: SelectSubset<T, historial_accesoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_accesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_accesos
     * const historial_acceso = await prisma.historial_acceso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historial_accesoUpdateManyArgs>(args: SelectSubset<T, historial_accesoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_accesos and returns the data updated in the database.
     * @param {historial_accesoUpdateManyAndReturnArgs} args - Arguments to update many Historial_accesos.
     * @example
     * // Update many Historial_accesos
     * const historial_acceso = await prisma.historial_acceso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historial_accesos and only return the `id_acceso`
     * const historial_accesoWithId_accesoOnly = await prisma.historial_acceso.updateManyAndReturn({
     *   select: { id_acceso: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends historial_accesoUpdateManyAndReturnArgs>(args: SelectSubset<T, historial_accesoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historial_acceso.
     * @param {historial_accesoUpsertArgs} args - Arguments to update or create a Historial_acceso.
     * @example
     * // Update or create a Historial_acceso
     * const historial_acceso = await prisma.historial_acceso.upsert({
     *   create: {
     *     // ... data to create a Historial_acceso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_acceso we want to update
     *   }
     * })
     */
    upsert<T extends historial_accesoUpsertArgs>(args: SelectSubset<T, historial_accesoUpsertArgs<ExtArgs>>): Prisma__historial_accesoClient<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historial_accesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoCountArgs} args - Arguments to filter Historial_accesos to count.
     * @example
     * // Count the number of Historial_accesos
     * const count = await prisma.historial_acceso.count({
     *   where: {
     *     // ... the filter for the Historial_accesos we want to count
     *   }
     * })
    **/
    count<T extends historial_accesoCountArgs>(
      args?: Subset<T, historial_accesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_accesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_acceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_accesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Historial_accesoAggregateArgs>(args: Subset<T, Historial_accesoAggregateArgs>): Prisma.PrismaPromise<GetHistorial_accesoAggregateType<T>>

    /**
     * Group by Historial_acceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_accesoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historial_accesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_accesoGroupByArgs['orderBy'] }
        : { orderBy?: historial_accesoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historial_accesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_accesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historial_acceso model
   */
  readonly fields: historial_accesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_acceso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historial_accesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libro<T extends libroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, libroDefaultArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the historial_acceso model
   */
  interface historial_accesoFieldRefs {
    readonly id_acceso: FieldRef<"historial_acceso", 'Int'>
    readonly id_usuario: FieldRef<"historial_acceso", 'Int'>
    readonly id_libro: FieldRef<"historial_acceso", 'Int'>
    readonly fecha_consulta: FieldRef<"historial_acceso", 'DateTime'>
    readonly tipo_acceso: FieldRef<"historial_acceso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * historial_acceso findUnique
   */
  export type historial_accesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter, which historial_acceso to fetch.
     */
    where: historial_accesoWhereUniqueInput
  }

  /**
   * historial_acceso findUniqueOrThrow
   */
  export type historial_accesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter, which historial_acceso to fetch.
     */
    where: historial_accesoWhereUniqueInput
  }

  /**
   * historial_acceso findFirst
   */
  export type historial_accesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter, which historial_acceso to fetch.
     */
    where?: historial_accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_accesos to fetch.
     */
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_accesos.
     */
    cursor?: historial_accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_accesos.
     */
    distinct?: Historial_accesoScalarFieldEnum | Historial_accesoScalarFieldEnum[]
  }

  /**
   * historial_acceso findFirstOrThrow
   */
  export type historial_accesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter, which historial_acceso to fetch.
     */
    where?: historial_accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_accesos to fetch.
     */
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_accesos.
     */
    cursor?: historial_accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_accesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_accesos.
     */
    distinct?: Historial_accesoScalarFieldEnum | Historial_accesoScalarFieldEnum[]
  }

  /**
   * historial_acceso findMany
   */
  export type historial_accesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter, which historial_accesos to fetch.
     */
    where?: historial_accesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_accesos to fetch.
     */
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_accesos.
     */
    cursor?: historial_accesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_accesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_accesos.
     */
    skip?: number
    distinct?: Historial_accesoScalarFieldEnum | Historial_accesoScalarFieldEnum[]
  }

  /**
   * historial_acceso create
   */
  export type historial_accesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * The data needed to create a historial_acceso.
     */
    data: XOR<historial_accesoCreateInput, historial_accesoUncheckedCreateInput>
  }

  /**
   * historial_acceso createMany
   */
  export type historial_accesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_accesos.
     */
    data: historial_accesoCreateManyInput | historial_accesoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historial_acceso createManyAndReturn
   */
  export type historial_accesoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * The data used to create many historial_accesos.
     */
    data: historial_accesoCreateManyInput | historial_accesoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_acceso update
   */
  export type historial_accesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * The data needed to update a historial_acceso.
     */
    data: XOR<historial_accesoUpdateInput, historial_accesoUncheckedUpdateInput>
    /**
     * Choose, which historial_acceso to update.
     */
    where: historial_accesoWhereUniqueInput
  }

  /**
   * historial_acceso updateMany
   */
  export type historial_accesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_accesos.
     */
    data: XOR<historial_accesoUpdateManyMutationInput, historial_accesoUncheckedUpdateManyInput>
    /**
     * Filter which historial_accesos to update
     */
    where?: historial_accesoWhereInput
    /**
     * Limit how many historial_accesos to update.
     */
    limit?: number
  }

  /**
   * historial_acceso updateManyAndReturn
   */
  export type historial_accesoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * The data used to update historial_accesos.
     */
    data: XOR<historial_accesoUpdateManyMutationInput, historial_accesoUncheckedUpdateManyInput>
    /**
     * Filter which historial_accesos to update
     */
    where?: historial_accesoWhereInput
    /**
     * Limit how many historial_accesos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * historial_acceso upsert
   */
  export type historial_accesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * The filter to search for the historial_acceso to update in case it exists.
     */
    where: historial_accesoWhereUniqueInput
    /**
     * In case the historial_acceso found by the `where` argument doesn't exist, create a new historial_acceso with this data.
     */
    create: XOR<historial_accesoCreateInput, historial_accesoUncheckedCreateInput>
    /**
     * In case the historial_acceso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_accesoUpdateInput, historial_accesoUncheckedUpdateInput>
  }

  /**
   * historial_acceso delete
   */
  export type historial_accesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    /**
     * Filter which historial_acceso to delete.
     */
    where: historial_accesoWhereUniqueInput
  }

  /**
   * historial_acceso deleteMany
   */
  export type historial_accesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_accesos to delete
     */
    where?: historial_accesoWhereInput
    /**
     * Limit how many historial_accesos to delete.
     */
    limit?: number
  }

  /**
   * historial_acceso without action
   */
  export type historial_accesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
  }


  /**
   * Model libro
   */

  export type AggregateLibro = {
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  export type LibroAvgAggregateOutputType = {
    id_libro: number | null
    anio_publicacion: number | null
    id_editorial: number | null
    id_categoria: number | null
  }

  export type LibroSumAggregateOutputType = {
    id_libro: number | null
    anio_publicacion: number | null
    id_editorial: number | null
    id_categoria: number | null
  }

  export type LibroMinAggregateOutputType = {
    id_libro: number | null
    titulo: string | null
    isbn: string | null
    anio_publicacion: number | null
    idioma: string | null
    resumen: string | null
    id_editorial: number | null
    id_categoria: number | null
  }

  export type LibroMaxAggregateOutputType = {
    id_libro: number | null
    titulo: string | null
    isbn: string | null
    anio_publicacion: number | null
    idioma: string | null
    resumen: string | null
    id_editorial: number | null
    id_categoria: number | null
  }

  export type LibroCountAggregateOutputType = {
    id_libro: number
    titulo: number
    isbn: number
    anio_publicacion: number
    idioma: number
    resumen: number
    autores: number
    id_editorial: number
    id_categoria: number
    _all: number
  }


  export type LibroAvgAggregateInputType = {
    id_libro?: true
    anio_publicacion?: true
    id_editorial?: true
    id_categoria?: true
  }

  export type LibroSumAggregateInputType = {
    id_libro?: true
    anio_publicacion?: true
    id_editorial?: true
    id_categoria?: true
  }

  export type LibroMinAggregateInputType = {
    id_libro?: true
    titulo?: true
    isbn?: true
    anio_publicacion?: true
    idioma?: true
    resumen?: true
    id_editorial?: true
    id_categoria?: true
  }

  export type LibroMaxAggregateInputType = {
    id_libro?: true
    titulo?: true
    isbn?: true
    anio_publicacion?: true
    idioma?: true
    resumen?: true
    id_editorial?: true
    id_categoria?: true
  }

  export type LibroCountAggregateInputType = {
    id_libro?: true
    titulo?: true
    isbn?: true
    anio_publicacion?: true
    idioma?: true
    resumen?: true
    autores?: true
    id_editorial?: true
    id_categoria?: true
    _all?: true
  }

  export type LibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libro to aggregate.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned libros
    **/
    _count?: true | LibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibroMaxAggregateInputType
  }

  export type GetLibroAggregateType<T extends LibroAggregateArgs> = {
        [P in keyof T & keyof AggregateLibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibro[P]>
      : GetScalarType<T[P], AggregateLibro[P]>
  }




  export type libroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: libroWhereInput
    orderBy?: libroOrderByWithAggregationInput | libroOrderByWithAggregationInput[]
    by: LibroScalarFieldEnum[] | LibroScalarFieldEnum
    having?: libroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibroCountAggregateInputType | true
    _avg?: LibroAvgAggregateInputType
    _sum?: LibroSumAggregateInputType
    _min?: LibroMinAggregateInputType
    _max?: LibroMaxAggregateInputType
  }

  export type LibroGroupByOutputType = {
    id_libro: number
    titulo: string
    isbn: string
    anio_publicacion: number | null
    idioma: string
    resumen: string | null
    autores: string[]
    id_editorial: number
    id_categoria: number
    _count: LibroCountAggregateOutputType | null
    _avg: LibroAvgAggregateOutputType | null
    _sum: LibroSumAggregateOutputType | null
    _min: LibroMinAggregateOutputType | null
    _max: LibroMaxAggregateOutputType | null
  }

  type GetLibroGroupByPayload<T extends libroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibroGroupByOutputType[P]>
            : GetScalarType<T[P], LibroGroupByOutputType[P]>
        }
      >
    >


  export type libroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_libro?: boolean
    titulo?: boolean
    isbn?: boolean
    anio_publicacion?: boolean
    idioma?: boolean
    resumen?: boolean
    autores?: boolean
    id_editorial?: boolean
    id_categoria?: boolean
    historial_acceso?: boolean | libro$historial_accesoArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
    unidadlibro?: boolean | libro$unidadlibroArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type libroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_libro?: boolean
    titulo?: boolean
    isbn?: boolean
    anio_publicacion?: boolean
    idioma?: boolean
    resumen?: boolean
    autores?: boolean
    id_editorial?: boolean
    id_categoria?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type libroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_libro?: boolean
    titulo?: boolean
    isbn?: boolean
    anio_publicacion?: boolean
    idioma?: boolean
    resumen?: boolean
    autores?: boolean
    id_editorial?: boolean
    id_categoria?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libro"]>

  export type libroSelectScalar = {
    id_libro?: boolean
    titulo?: boolean
    isbn?: boolean
    anio_publicacion?: boolean
    idioma?: boolean
    resumen?: boolean
    autores?: boolean
    id_editorial?: boolean
    id_categoria?: boolean
  }

  export type libroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_libro" | "titulo" | "isbn" | "anio_publicacion" | "idioma" | "resumen" | "autores" | "id_editorial" | "id_categoria", ExtArgs["result"]["libro"]>
  export type libroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_acceso?: boolean | libro$historial_accesoArgs<ExtArgs>
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
    unidadlibro?: boolean | libro$unidadlibroArgs<ExtArgs>
    _count?: boolean | LibroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type libroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
  }
  export type libroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    editorial?: boolean | editorialDefaultArgs<ExtArgs>
  }

  export type $libroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "libro"
    objects: {
      historial_acceso: Prisma.$historial_accesoPayload<ExtArgs>[]
      categoria: Prisma.$categoriaPayload<ExtArgs>
      editorial: Prisma.$editorialPayload<ExtArgs>
      unidadlibro: Prisma.$unidadlibroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_libro: number
      titulo: string
      isbn: string
      anio_publicacion: number | null
      idioma: string
      resumen: string | null
      autores: string[]
      id_editorial: number
      id_categoria: number
    }, ExtArgs["result"]["libro"]>
    composites: {}
  }

  type libroGetPayload<S extends boolean | null | undefined | libroDefaultArgs> = $Result.GetResult<Prisma.$libroPayload, S>

  type libroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<libroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibroCountAggregateInputType | true
    }

  export interface libroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['libro'], meta: { name: 'libro' } }
    /**
     * Find zero or one Libro that matches the filter.
     * @param {libroFindUniqueArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends libroFindUniqueArgs>(args: SelectSubset<T, libroFindUniqueArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {libroFindUniqueOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends libroFindUniqueOrThrowArgs>(args: SelectSubset<T, libroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindFirstArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends libroFindFirstArgs>(args?: SelectSubset<T, libroFindFirstArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindFirstOrThrowArgs} args - Arguments to find a Libro
     * @example
     * // Get one Libro
     * const libro = await prisma.libro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends libroFindFirstOrThrowArgs>(args?: SelectSubset<T, libroFindFirstOrThrowArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libros
     * const libros = await prisma.libro.findMany()
     * 
     * // Get first 10 Libros
     * const libros = await prisma.libro.findMany({ take: 10 })
     * 
     * // Only select the `id_libro`
     * const libroWithId_libroOnly = await prisma.libro.findMany({ select: { id_libro: true } })
     * 
     */
    findMany<T extends libroFindManyArgs>(args?: SelectSubset<T, libroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libro.
     * @param {libroCreateArgs} args - Arguments to create a Libro.
     * @example
     * // Create one Libro
     * const Libro = await prisma.libro.create({
     *   data: {
     *     // ... data to create a Libro
     *   }
     * })
     * 
     */
    create<T extends libroCreateArgs>(args: SelectSubset<T, libroCreateArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libros.
     * @param {libroCreateManyArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends libroCreateManyArgs>(args?: SelectSubset<T, libroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libros and returns the data saved in the database.
     * @param {libroCreateManyAndReturnArgs} args - Arguments to create many Libros.
     * @example
     * // Create many Libros
     * const libro = await prisma.libro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libros and only return the `id_libro`
     * const libroWithId_libroOnly = await prisma.libro.createManyAndReturn({
     *   select: { id_libro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends libroCreateManyAndReturnArgs>(args?: SelectSubset<T, libroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libro.
     * @param {libroDeleteArgs} args - Arguments to delete one Libro.
     * @example
     * // Delete one Libro
     * const Libro = await prisma.libro.delete({
     *   where: {
     *     // ... filter to delete one Libro
     *   }
     * })
     * 
     */
    delete<T extends libroDeleteArgs>(args: SelectSubset<T, libroDeleteArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libro.
     * @param {libroUpdateArgs} args - Arguments to update one Libro.
     * @example
     * // Update one Libro
     * const libro = await prisma.libro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends libroUpdateArgs>(args: SelectSubset<T, libroUpdateArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libros.
     * @param {libroDeleteManyArgs} args - Arguments to filter Libros to delete.
     * @example
     * // Delete a few Libros
     * const { count } = await prisma.libro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends libroDeleteManyArgs>(args?: SelectSubset<T, libroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends libroUpdateManyArgs>(args: SelectSubset<T, libroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libros and returns the data updated in the database.
     * @param {libroUpdateManyAndReturnArgs} args - Arguments to update many Libros.
     * @example
     * // Update many Libros
     * const libro = await prisma.libro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libros and only return the `id_libro`
     * const libroWithId_libroOnly = await prisma.libro.updateManyAndReturn({
     *   select: { id_libro: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends libroUpdateManyAndReturnArgs>(args: SelectSubset<T, libroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libro.
     * @param {libroUpsertArgs} args - Arguments to update or create a Libro.
     * @example
     * // Update or create a Libro
     * const libro = await prisma.libro.upsert({
     *   create: {
     *     // ... data to create a Libro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libro we want to update
     *   }
     * })
     */
    upsert<T extends libroUpsertArgs>(args: SelectSubset<T, libroUpsertArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroCountArgs} args - Arguments to filter Libros to count.
     * @example
     * // Count the number of Libros
     * const count = await prisma.libro.count({
     *   where: {
     *     // ... the filter for the Libros we want to count
     *   }
     * })
    **/
    count<T extends libroCountArgs>(
      args?: Subset<T, libroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibroAggregateArgs>(args: Subset<T, LibroAggregateArgs>): Prisma.PrismaPromise<GetLibroAggregateType<T>>

    /**
     * Group by Libro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {libroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends libroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: libroGroupByArgs['orderBy'] }
        : { orderBy?: libroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, libroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the libro model
   */
  readonly fields: libroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for libro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__libroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_acceso<T extends libro$historial_accesoArgs<ExtArgs> = {}>(args?: Subset<T, libro$historial_accesoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editorial<T extends editorialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, editorialDefaultArgs<ExtArgs>>): Prisma__editorialClient<$Result.GetResult<Prisma.$editorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidadlibro<T extends libro$unidadlibroArgs<ExtArgs> = {}>(args?: Subset<T, libro$unidadlibroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the libro model
   */
  interface libroFieldRefs {
    readonly id_libro: FieldRef<"libro", 'Int'>
    readonly titulo: FieldRef<"libro", 'String'>
    readonly isbn: FieldRef<"libro", 'String'>
    readonly anio_publicacion: FieldRef<"libro", 'Int'>
    readonly idioma: FieldRef<"libro", 'String'>
    readonly resumen: FieldRef<"libro", 'String'>
    readonly autores: FieldRef<"libro", 'String[]'>
    readonly id_editorial: FieldRef<"libro", 'Int'>
    readonly id_categoria: FieldRef<"libro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * libro findUnique
   */
  export type libroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro findUniqueOrThrow
   */
  export type libroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro findFirst
   */
  export type libroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro findFirstOrThrow
   */
  export type libroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libro to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of libros.
     */
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro findMany
   */
  export type libroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter, which libros to fetch.
     */
    where?: libroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of libros to fetch.
     */
    orderBy?: libroOrderByWithRelationInput | libroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing libros.
     */
    cursor?: libroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` libros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` libros.
     */
    skip?: number
    distinct?: LibroScalarFieldEnum | LibroScalarFieldEnum[]
  }

  /**
   * libro create
   */
  export type libroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The data needed to create a libro.
     */
    data: XOR<libroCreateInput, libroUncheckedCreateInput>
  }

  /**
   * libro createMany
   */
  export type libroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many libros.
     */
    data: libroCreateManyInput | libroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * libro createManyAndReturn
   */
  export type libroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * The data used to create many libros.
     */
    data: libroCreateManyInput | libroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * libro update
   */
  export type libroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The data needed to update a libro.
     */
    data: XOR<libroUpdateInput, libroUncheckedUpdateInput>
    /**
     * Choose, which libro to update.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro updateMany
   */
  export type libroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update libros.
     */
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyInput>
    /**
     * Filter which libros to update
     */
    where?: libroWhereInput
    /**
     * Limit how many libros to update.
     */
    limit?: number
  }

  /**
   * libro updateManyAndReturn
   */
  export type libroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * The data used to update libros.
     */
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyInput>
    /**
     * Filter which libros to update
     */
    where?: libroWhereInput
    /**
     * Limit how many libros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * libro upsert
   */
  export type libroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * The filter to search for the libro to update in case it exists.
     */
    where: libroWhereUniqueInput
    /**
     * In case the libro found by the `where` argument doesn't exist, create a new libro with this data.
     */
    create: XOR<libroCreateInput, libroUncheckedCreateInput>
    /**
     * In case the libro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<libroUpdateInput, libroUncheckedUpdateInput>
  }

  /**
   * libro delete
   */
  export type libroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
    /**
     * Filter which libro to delete.
     */
    where: libroWhereUniqueInput
  }

  /**
   * libro deleteMany
   */
  export type libroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which libros to delete
     */
    where?: libroWhereInput
    /**
     * Limit how many libros to delete.
     */
    limit?: number
  }

  /**
   * libro.historial_acceso
   */
  export type libro$historial_accesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    where?: historial_accesoWhereInput
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    cursor?: historial_accesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_accesoScalarFieldEnum | Historial_accesoScalarFieldEnum[]
  }

  /**
   * libro.unidadlibro
   */
  export type libro$unidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    where?: unidadlibroWhereInput
    orderBy?: unidadlibroOrderByWithRelationInput | unidadlibroOrderByWithRelationInput[]
    cursor?: unidadlibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnidadlibroScalarFieldEnum | UnidadlibroScalarFieldEnum[]
  }

  /**
   * libro without action
   */
  export type libroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the libro
     */
    select?: libroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the libro
     */
    omit?: libroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: libroInclude<ExtArgs> | null
  }


  /**
   * Model prestamo
   */

  export type AggregatePrestamo = {
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  export type PrestamoAvgAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type PrestamoSumAggregateOutputType = {
    id_prestamo: number | null
    id_usuario: number | null
  }

  export type PrestamoMinAggregateOutputType = {
    id_prestamo: number | null
    fecha_prestamo: Date | null
    fecha_entrega: Date | null
    id_usuario: number | null
    estado_prestamo: string | null
  }

  export type PrestamoMaxAggregateOutputType = {
    id_prestamo: number | null
    fecha_prestamo: Date | null
    fecha_entrega: Date | null
    id_usuario: number | null
    estado_prestamo: string | null
  }

  export type PrestamoCountAggregateOutputType = {
    id_prestamo: number
    fecha_prestamo: number
    fecha_entrega: number
    id_usuario: number
    estado_prestamo: number
    _all: number
  }


  export type PrestamoAvgAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type PrestamoSumAggregateInputType = {
    id_prestamo?: true
    id_usuario?: true
  }

  export type PrestamoMinAggregateInputType = {
    id_prestamo?: true
    fecha_prestamo?: true
    fecha_entrega?: true
    id_usuario?: true
    estado_prestamo?: true
  }

  export type PrestamoMaxAggregateInputType = {
    id_prestamo?: true
    fecha_prestamo?: true
    fecha_entrega?: true
    id_usuario?: true
    estado_prestamo?: true
  }

  export type PrestamoCountAggregateInputType = {
    id_prestamo?: true
    fecha_prestamo?: true
    fecha_entrega?: true
    id_usuario?: true
    estado_prestamo?: true
    _all?: true
  }

  export type PrestamoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamo to aggregate.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestamos
    **/
    _count?: true | PrestamoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrestamoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrestamoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrestamoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrestamoMaxAggregateInputType
  }

  export type GetPrestamoAggregateType<T extends PrestamoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamo[P]>
      : GetScalarType<T[P], AggregatePrestamo[P]>
  }




  export type prestamoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamoWhereInput
    orderBy?: prestamoOrderByWithAggregationInput | prestamoOrderByWithAggregationInput[]
    by: PrestamoScalarFieldEnum[] | PrestamoScalarFieldEnum
    having?: prestamoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrestamoCountAggregateInputType | true
    _avg?: PrestamoAvgAggregateInputType
    _sum?: PrestamoSumAggregateInputType
    _min?: PrestamoMinAggregateInputType
    _max?: PrestamoMaxAggregateInputType
  }

  export type PrestamoGroupByOutputType = {
    id_prestamo: number
    fecha_prestamo: Date
    fecha_entrega: Date | null
    id_usuario: number
    estado_prestamo: string
    _count: PrestamoCountAggregateOutputType | null
    _avg: PrestamoAvgAggregateOutputType | null
    _sum: PrestamoSumAggregateOutputType | null
    _min: PrestamoMinAggregateOutputType | null
    _max: PrestamoMaxAggregateOutputType | null
  }

  type GetPrestamoGroupByPayload<T extends prestamoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrestamoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrestamoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
            : GetScalarType<T[P], PrestamoGroupByOutputType[P]>
        }
      >
    >


  export type prestamoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    fecha_prestamo?: boolean
    fecha_entrega?: boolean
    id_usuario?: boolean
    estado_prestamo?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    prestamo_unidadlibro?: boolean | prestamo$prestamo_unidadlibroArgs<ExtArgs>
    _count?: boolean | PrestamoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type prestamoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    fecha_prestamo?: boolean
    fecha_entrega?: boolean
    id_usuario?: boolean
    estado_prestamo?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type prestamoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    fecha_prestamo?: boolean
    fecha_entrega?: boolean
    id_usuario?: boolean
    estado_prestamo?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo"]>

  export type prestamoSelectScalar = {
    id_prestamo?: boolean
    fecha_prestamo?: boolean
    fecha_entrega?: boolean
    id_usuario?: boolean
    estado_prestamo?: boolean
  }

  export type prestamoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestamo" | "fecha_prestamo" | "fecha_entrega" | "id_usuario" | "estado_prestamo", ExtArgs["result"]["prestamo"]>
  export type prestamoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    prestamo_unidadlibro?: boolean | prestamo$prestamo_unidadlibroArgs<ExtArgs>
    _count?: boolean | PrestamoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type prestamoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type prestamoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $prestamoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestamo"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      prestamo_unidadlibro: Prisma.$prestamo_unidadlibroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      fecha_prestamo: Date
      fecha_entrega: Date | null
      id_usuario: number
      estado_prestamo: string
    }, ExtArgs["result"]["prestamo"]>
    composites: {}
  }

  type prestamoGetPayload<S extends boolean | null | undefined | prestamoDefaultArgs> = $Result.GetResult<Prisma.$prestamoPayload, S>

  type prestamoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prestamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrestamoCountAggregateInputType | true
    }

  export interface prestamoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestamo'], meta: { name: 'prestamo' } }
    /**
     * Find zero or one Prestamo that matches the filter.
     * @param {prestamoFindUniqueArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestamoFindUniqueArgs>(args: SelectSubset<T, prestamoFindUniqueArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prestamoFindUniqueOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestamoFindUniqueOrThrowArgs>(args: SelectSubset<T, prestamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindFirstArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestamoFindFirstArgs>(args?: SelectSubset<T, prestamoFindFirstArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindFirstOrThrowArgs} args - Arguments to find a Prestamo
     * @example
     * // Get one Prestamo
     * const prestamo = await prisma.prestamo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestamoFindFirstOrThrowArgs>(args?: SelectSubset<T, prestamoFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamos
     * const prestamos = await prisma.prestamo.findMany()
     * 
     * // Get first 10 Prestamos
     * const prestamos = await prisma.prestamo.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends prestamoFindManyArgs>(args?: SelectSubset<T, prestamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamo.
     * @param {prestamoCreateArgs} args - Arguments to create a Prestamo.
     * @example
     * // Create one Prestamo
     * const Prestamo = await prisma.prestamo.create({
     *   data: {
     *     // ... data to create a Prestamo
     *   }
     * })
     * 
     */
    create<T extends prestamoCreateArgs>(args: SelectSubset<T, prestamoCreateArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamos.
     * @param {prestamoCreateManyArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestamoCreateManyArgs>(args?: SelectSubset<T, prestamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamos and returns the data saved in the database.
     * @param {prestamoCreateManyAndReturnArgs} args - Arguments to create many Prestamos.
     * @example
     * // Create many Prestamos
     * const prestamo = await prisma.prestamo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamos and only return the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.createManyAndReturn({
     *   select: { id_prestamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prestamoCreateManyAndReturnArgs>(args?: SelectSubset<T, prestamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamo.
     * @param {prestamoDeleteArgs} args - Arguments to delete one Prestamo.
     * @example
     * // Delete one Prestamo
     * const Prestamo = await prisma.prestamo.delete({
     *   where: {
     *     // ... filter to delete one Prestamo
     *   }
     * })
     * 
     */
    delete<T extends prestamoDeleteArgs>(args: SelectSubset<T, prestamoDeleteArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamo.
     * @param {prestamoUpdateArgs} args - Arguments to update one Prestamo.
     * @example
     * // Update one Prestamo
     * const prestamo = await prisma.prestamo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestamoUpdateArgs>(args: SelectSubset<T, prestamoUpdateArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamos.
     * @param {prestamoDeleteManyArgs} args - Arguments to filter Prestamos to delete.
     * @example
     * // Delete a few Prestamos
     * const { count } = await prisma.prestamo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestamoDeleteManyArgs>(args?: SelectSubset<T, prestamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestamoUpdateManyArgs>(args: SelectSubset<T, prestamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamos and returns the data updated in the database.
     * @param {prestamoUpdateManyAndReturnArgs} args - Arguments to update many Prestamos.
     * @example
     * // Update many Prestamos
     * const prestamo = await prisma.prestamo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamos and only return the `id_prestamo`
     * const prestamoWithId_prestamoOnly = await prisma.prestamo.updateManyAndReturn({
     *   select: { id_prestamo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prestamoUpdateManyAndReturnArgs>(args: SelectSubset<T, prestamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamo.
     * @param {prestamoUpsertArgs} args - Arguments to update or create a Prestamo.
     * @example
     * // Update or create a Prestamo
     * const prestamo = await prisma.prestamo.upsert({
     *   create: {
     *     // ... data to create a Prestamo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamo we want to update
     *   }
     * })
     */
    upsert<T extends prestamoUpsertArgs>(args: SelectSubset<T, prestamoUpsertArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoCountArgs} args - Arguments to filter Prestamos to count.
     * @example
     * // Count the number of Prestamos
     * const count = await prisma.prestamo.count({
     *   where: {
     *     // ... the filter for the Prestamos we want to count
     *   }
     * })
    **/
    count<T extends prestamoCountArgs>(
      args?: Subset<T, prestamoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrestamoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrestamoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrestamoAggregateArgs>(args: Subset<T, PrestamoAggregateArgs>): Prisma.PrismaPromise<GetPrestamoAggregateType<T>>

    /**
     * Group by Prestamo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prestamoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestamoGroupByArgs['orderBy'] }
        : { orderBy?: prestamoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prestamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestamo model
   */
  readonly fields: prestamoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestamo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestamoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prestamo_unidadlibro<T extends prestamo$prestamo_unidadlibroArgs<ExtArgs> = {}>(args?: Subset<T, prestamo$prestamo_unidadlibroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prestamo model
   */
  interface prestamoFieldRefs {
    readonly id_prestamo: FieldRef<"prestamo", 'Int'>
    readonly fecha_prestamo: FieldRef<"prestamo", 'DateTime'>
    readonly fecha_entrega: FieldRef<"prestamo", 'DateTime'>
    readonly id_usuario: FieldRef<"prestamo", 'Int'>
    readonly estado_prestamo: FieldRef<"prestamo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * prestamo findUnique
   */
  export type prestamoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo findUniqueOrThrow
   */
  export type prestamoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo findFirst
   */
  export type prestamoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo findFirstOrThrow
   */
  export type prestamoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamo to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamos.
     */
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo findMany
   */
  export type prestamoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter, which prestamos to fetch.
     */
    where?: prestamoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamos to fetch.
     */
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestamos.
     */
    cursor?: prestamoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamos.
     */
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * prestamo create
   */
  export type prestamoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The data needed to create a prestamo.
     */
    data: XOR<prestamoCreateInput, prestamoUncheckedCreateInput>
  }

  /**
   * prestamo createMany
   */
  export type prestamoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestamos.
     */
    data: prestamoCreateManyInput | prestamoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestamo createManyAndReturn
   */
  export type prestamoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * The data used to create many prestamos.
     */
    data: prestamoCreateManyInput | prestamoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamo update
   */
  export type prestamoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The data needed to update a prestamo.
     */
    data: XOR<prestamoUpdateInput, prestamoUncheckedUpdateInput>
    /**
     * Choose, which prestamo to update.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo updateMany
   */
  export type prestamoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamoUpdateManyMutationInput, prestamoUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamoWhereInput
    /**
     * Limit how many prestamos to update.
     */
    limit?: number
  }

  /**
   * prestamo updateManyAndReturn
   */
  export type prestamoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * The data used to update prestamos.
     */
    data: XOR<prestamoUpdateManyMutationInput, prestamoUncheckedUpdateManyInput>
    /**
     * Filter which prestamos to update
     */
    where?: prestamoWhereInput
    /**
     * Limit how many prestamos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamo upsert
   */
  export type prestamoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * The filter to search for the prestamo to update in case it exists.
     */
    where: prestamoWhereUniqueInput
    /**
     * In case the prestamo found by the `where` argument doesn't exist, create a new prestamo with this data.
     */
    create: XOR<prestamoCreateInput, prestamoUncheckedCreateInput>
    /**
     * In case the prestamo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestamoUpdateInput, prestamoUncheckedUpdateInput>
  }

  /**
   * prestamo delete
   */
  export type prestamoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    /**
     * Filter which prestamo to delete.
     */
    where: prestamoWhereUniqueInput
  }

  /**
   * prestamo deleteMany
   */
  export type prestamoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamos to delete
     */
    where?: prestamoWhereInput
    /**
     * Limit how many prestamos to delete.
     */
    limit?: number
  }

  /**
   * prestamo.prestamo_unidadlibro
   */
  export type prestamo$prestamo_unidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    where?: prestamo_unidadlibroWhereInput
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    cursor?: prestamo_unidadlibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prestamo_unidadlibroScalarFieldEnum | Prestamo_unidadlibroScalarFieldEnum[]
  }

  /**
   * prestamo without action
   */
  export type prestamoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
  }


  /**
   * Model prestamo_unidadlibro
   */

  export type AggregatePrestamo_unidadlibro = {
    _count: Prestamo_unidadlibroCountAggregateOutputType | null
    _avg: Prestamo_unidadlibroAvgAggregateOutputType | null
    _sum: Prestamo_unidadlibroSumAggregateOutputType | null
    _min: Prestamo_unidadlibroMinAggregateOutputType | null
    _max: Prestamo_unidadlibroMaxAggregateOutputType | null
  }

  export type Prestamo_unidadlibroAvgAggregateOutputType = {
    id_prestamo: number | null
    id_unidad: number | null
  }

  export type Prestamo_unidadlibroSumAggregateOutputType = {
    id_prestamo: number | null
    id_unidad: number | null
  }

  export type Prestamo_unidadlibroMinAggregateOutputType = {
    id_prestamo: number | null
    id_unidad: number | null
  }

  export type Prestamo_unidadlibroMaxAggregateOutputType = {
    id_prestamo: number | null
    id_unidad: number | null
  }

  export type Prestamo_unidadlibroCountAggregateOutputType = {
    id_prestamo: number
    id_unidad: number
    _all: number
  }


  export type Prestamo_unidadlibroAvgAggregateInputType = {
    id_prestamo?: true
    id_unidad?: true
  }

  export type Prestamo_unidadlibroSumAggregateInputType = {
    id_prestamo?: true
    id_unidad?: true
  }

  export type Prestamo_unidadlibroMinAggregateInputType = {
    id_prestamo?: true
    id_unidad?: true
  }

  export type Prestamo_unidadlibroMaxAggregateInputType = {
    id_prestamo?: true
    id_unidad?: true
  }

  export type Prestamo_unidadlibroCountAggregateInputType = {
    id_prestamo?: true
    id_unidad?: true
    _all?: true
  }

  export type Prestamo_unidadlibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamo_unidadlibro to aggregate.
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamo_unidadlibros to fetch.
     */
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prestamo_unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamo_unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamo_unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prestamo_unidadlibros
    **/
    _count?: true | Prestamo_unidadlibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Prestamo_unidadlibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Prestamo_unidadlibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Prestamo_unidadlibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Prestamo_unidadlibroMaxAggregateInputType
  }

  export type GetPrestamo_unidadlibroAggregateType<T extends Prestamo_unidadlibroAggregateArgs> = {
        [P in keyof T & keyof AggregatePrestamo_unidadlibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrestamo_unidadlibro[P]>
      : GetScalarType<T[P], AggregatePrestamo_unidadlibro[P]>
  }




  export type prestamo_unidadlibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prestamo_unidadlibroWhereInput
    orderBy?: prestamo_unidadlibroOrderByWithAggregationInput | prestamo_unidadlibroOrderByWithAggregationInput[]
    by: Prestamo_unidadlibroScalarFieldEnum[] | Prestamo_unidadlibroScalarFieldEnum
    having?: prestamo_unidadlibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Prestamo_unidadlibroCountAggregateInputType | true
    _avg?: Prestamo_unidadlibroAvgAggregateInputType
    _sum?: Prestamo_unidadlibroSumAggregateInputType
    _min?: Prestamo_unidadlibroMinAggregateInputType
    _max?: Prestamo_unidadlibroMaxAggregateInputType
  }

  export type Prestamo_unidadlibroGroupByOutputType = {
    id_prestamo: number
    id_unidad: number
    _count: Prestamo_unidadlibroCountAggregateOutputType | null
    _avg: Prestamo_unidadlibroAvgAggregateOutputType | null
    _sum: Prestamo_unidadlibroSumAggregateOutputType | null
    _min: Prestamo_unidadlibroMinAggregateOutputType | null
    _max: Prestamo_unidadlibroMaxAggregateOutputType | null
  }

  type GetPrestamo_unidadlibroGroupByPayload<T extends prestamo_unidadlibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Prestamo_unidadlibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Prestamo_unidadlibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Prestamo_unidadlibroGroupByOutputType[P]>
            : GetScalarType<T[P], Prestamo_unidadlibroGroupByOutputType[P]>
        }
      >
    >


  export type prestamo_unidadlibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_unidad?: boolean
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo_unidadlibro"]>

  export type prestamo_unidadlibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_unidad?: boolean
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo_unidadlibro"]>

  export type prestamo_unidadlibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_prestamo?: boolean
    id_unidad?: boolean
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prestamo_unidadlibro"]>

  export type prestamo_unidadlibroSelectScalar = {
    id_prestamo?: boolean
    id_unidad?: boolean
  }

  export type prestamo_unidadlibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_prestamo" | "id_unidad", ExtArgs["result"]["prestamo_unidadlibro"]>
  export type prestamo_unidadlibroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }
  export type prestamo_unidadlibroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }
  export type prestamo_unidadlibroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo?: boolean | prestamoDefaultArgs<ExtArgs>
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
  }

  export type $prestamo_unidadlibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prestamo_unidadlibro"
    objects: {
      prestamo: Prisma.$prestamoPayload<ExtArgs>
      unidadlibro: Prisma.$unidadlibroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_prestamo: number
      id_unidad: number
    }, ExtArgs["result"]["prestamo_unidadlibro"]>
    composites: {}
  }

  type prestamo_unidadlibroGetPayload<S extends boolean | null | undefined | prestamo_unidadlibroDefaultArgs> = $Result.GetResult<Prisma.$prestamo_unidadlibroPayload, S>

  type prestamo_unidadlibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prestamo_unidadlibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Prestamo_unidadlibroCountAggregateInputType | true
    }

  export interface prestamo_unidadlibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prestamo_unidadlibro'], meta: { name: 'prestamo_unidadlibro' } }
    /**
     * Find zero or one Prestamo_unidadlibro that matches the filter.
     * @param {prestamo_unidadlibroFindUniqueArgs} args - Arguments to find a Prestamo_unidadlibro
     * @example
     * // Get one Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prestamo_unidadlibroFindUniqueArgs>(args: SelectSubset<T, prestamo_unidadlibroFindUniqueArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prestamo_unidadlibro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prestamo_unidadlibroFindUniqueOrThrowArgs} args - Arguments to find a Prestamo_unidadlibro
     * @example
     * // Get one Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prestamo_unidadlibroFindUniqueOrThrowArgs>(args: SelectSubset<T, prestamo_unidadlibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo_unidadlibro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroFindFirstArgs} args - Arguments to find a Prestamo_unidadlibro
     * @example
     * // Get one Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prestamo_unidadlibroFindFirstArgs>(args?: SelectSubset<T, prestamo_unidadlibroFindFirstArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prestamo_unidadlibro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroFindFirstOrThrowArgs} args - Arguments to find a Prestamo_unidadlibro
     * @example
     * // Get one Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prestamo_unidadlibroFindFirstOrThrowArgs>(args?: SelectSubset<T, prestamo_unidadlibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prestamo_unidadlibros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prestamo_unidadlibros
     * const prestamo_unidadlibros = await prisma.prestamo_unidadlibro.findMany()
     * 
     * // Get first 10 Prestamo_unidadlibros
     * const prestamo_unidadlibros = await prisma.prestamo_unidadlibro.findMany({ take: 10 })
     * 
     * // Only select the `id_prestamo`
     * const prestamo_unidadlibroWithId_prestamoOnly = await prisma.prestamo_unidadlibro.findMany({ select: { id_prestamo: true } })
     * 
     */
    findMany<T extends prestamo_unidadlibroFindManyArgs>(args?: SelectSubset<T, prestamo_unidadlibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prestamo_unidadlibro.
     * @param {prestamo_unidadlibroCreateArgs} args - Arguments to create a Prestamo_unidadlibro.
     * @example
     * // Create one Prestamo_unidadlibro
     * const Prestamo_unidadlibro = await prisma.prestamo_unidadlibro.create({
     *   data: {
     *     // ... data to create a Prestamo_unidadlibro
     *   }
     * })
     * 
     */
    create<T extends prestamo_unidadlibroCreateArgs>(args: SelectSubset<T, prestamo_unidadlibroCreateArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prestamo_unidadlibros.
     * @param {prestamo_unidadlibroCreateManyArgs} args - Arguments to create many Prestamo_unidadlibros.
     * @example
     * // Create many Prestamo_unidadlibros
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prestamo_unidadlibroCreateManyArgs>(args?: SelectSubset<T, prestamo_unidadlibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prestamo_unidadlibros and returns the data saved in the database.
     * @param {prestamo_unidadlibroCreateManyAndReturnArgs} args - Arguments to create many Prestamo_unidadlibros.
     * @example
     * // Create many Prestamo_unidadlibros
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prestamo_unidadlibros and only return the `id_prestamo`
     * const prestamo_unidadlibroWithId_prestamoOnly = await prisma.prestamo_unidadlibro.createManyAndReturn({
     *   select: { id_prestamo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prestamo_unidadlibroCreateManyAndReturnArgs>(args?: SelectSubset<T, prestamo_unidadlibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prestamo_unidadlibro.
     * @param {prestamo_unidadlibroDeleteArgs} args - Arguments to delete one Prestamo_unidadlibro.
     * @example
     * // Delete one Prestamo_unidadlibro
     * const Prestamo_unidadlibro = await prisma.prestamo_unidadlibro.delete({
     *   where: {
     *     // ... filter to delete one Prestamo_unidadlibro
     *   }
     * })
     * 
     */
    delete<T extends prestamo_unidadlibroDeleteArgs>(args: SelectSubset<T, prestamo_unidadlibroDeleteArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prestamo_unidadlibro.
     * @param {prestamo_unidadlibroUpdateArgs} args - Arguments to update one Prestamo_unidadlibro.
     * @example
     * // Update one Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prestamo_unidadlibroUpdateArgs>(args: SelectSubset<T, prestamo_unidadlibroUpdateArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prestamo_unidadlibros.
     * @param {prestamo_unidadlibroDeleteManyArgs} args - Arguments to filter Prestamo_unidadlibros to delete.
     * @example
     * // Delete a few Prestamo_unidadlibros
     * const { count } = await prisma.prestamo_unidadlibro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prestamo_unidadlibroDeleteManyArgs>(args?: SelectSubset<T, prestamo_unidadlibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamo_unidadlibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prestamo_unidadlibros
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prestamo_unidadlibroUpdateManyArgs>(args: SelectSubset<T, prestamo_unidadlibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prestamo_unidadlibros and returns the data updated in the database.
     * @param {prestamo_unidadlibroUpdateManyAndReturnArgs} args - Arguments to update many Prestamo_unidadlibros.
     * @example
     * // Update many Prestamo_unidadlibros
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prestamo_unidadlibros and only return the `id_prestamo`
     * const prestamo_unidadlibroWithId_prestamoOnly = await prisma.prestamo_unidadlibro.updateManyAndReturn({
     *   select: { id_prestamo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends prestamo_unidadlibroUpdateManyAndReturnArgs>(args: SelectSubset<T, prestamo_unidadlibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prestamo_unidadlibro.
     * @param {prestamo_unidadlibroUpsertArgs} args - Arguments to update or create a Prestamo_unidadlibro.
     * @example
     * // Update or create a Prestamo_unidadlibro
     * const prestamo_unidadlibro = await prisma.prestamo_unidadlibro.upsert({
     *   create: {
     *     // ... data to create a Prestamo_unidadlibro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prestamo_unidadlibro we want to update
     *   }
     * })
     */
    upsert<T extends prestamo_unidadlibroUpsertArgs>(args: SelectSubset<T, prestamo_unidadlibroUpsertArgs<ExtArgs>>): Prisma__prestamo_unidadlibroClient<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prestamo_unidadlibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroCountArgs} args - Arguments to filter Prestamo_unidadlibros to count.
     * @example
     * // Count the number of Prestamo_unidadlibros
     * const count = await prisma.prestamo_unidadlibro.count({
     *   where: {
     *     // ... the filter for the Prestamo_unidadlibros we want to count
     *   }
     * })
    **/
    count<T extends prestamo_unidadlibroCountArgs>(
      args?: Subset<T, prestamo_unidadlibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Prestamo_unidadlibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prestamo_unidadlibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Prestamo_unidadlibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Prestamo_unidadlibroAggregateArgs>(args: Subset<T, Prestamo_unidadlibroAggregateArgs>): Prisma.PrismaPromise<GetPrestamo_unidadlibroAggregateType<T>>

    /**
     * Group by Prestamo_unidadlibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prestamo_unidadlibroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends prestamo_unidadlibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prestamo_unidadlibroGroupByArgs['orderBy'] }
        : { orderBy?: prestamo_unidadlibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, prestamo_unidadlibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamo_unidadlibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prestamo_unidadlibro model
   */
  readonly fields: prestamo_unidadlibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prestamo_unidadlibro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prestamo_unidadlibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo<T extends prestamoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, prestamoDefaultArgs<ExtArgs>>): Prisma__prestamoClient<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidadlibro<T extends unidadlibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unidadlibroDefaultArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the prestamo_unidadlibro model
   */
  interface prestamo_unidadlibroFieldRefs {
    readonly id_prestamo: FieldRef<"prestamo_unidadlibro", 'Int'>
    readonly id_unidad: FieldRef<"prestamo_unidadlibro", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * prestamo_unidadlibro findUnique
   */
  export type prestamo_unidadlibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which prestamo_unidadlibro to fetch.
     */
    where: prestamo_unidadlibroWhereUniqueInput
  }

  /**
   * prestamo_unidadlibro findUniqueOrThrow
   */
  export type prestamo_unidadlibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which prestamo_unidadlibro to fetch.
     */
    where: prestamo_unidadlibroWhereUniqueInput
  }

  /**
   * prestamo_unidadlibro findFirst
   */
  export type prestamo_unidadlibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which prestamo_unidadlibro to fetch.
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamo_unidadlibros to fetch.
     */
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamo_unidadlibros.
     */
    cursor?: prestamo_unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamo_unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamo_unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamo_unidadlibros.
     */
    distinct?: Prestamo_unidadlibroScalarFieldEnum | Prestamo_unidadlibroScalarFieldEnum[]
  }

  /**
   * prestamo_unidadlibro findFirstOrThrow
   */
  export type prestamo_unidadlibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which prestamo_unidadlibro to fetch.
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamo_unidadlibros to fetch.
     */
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prestamo_unidadlibros.
     */
    cursor?: prestamo_unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamo_unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamo_unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prestamo_unidadlibros.
     */
    distinct?: Prestamo_unidadlibroScalarFieldEnum | Prestamo_unidadlibroScalarFieldEnum[]
  }

  /**
   * prestamo_unidadlibro findMany
   */
  export type prestamo_unidadlibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which prestamo_unidadlibros to fetch.
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prestamo_unidadlibros to fetch.
     */
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prestamo_unidadlibros.
     */
    cursor?: prestamo_unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prestamo_unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prestamo_unidadlibros.
     */
    skip?: number
    distinct?: Prestamo_unidadlibroScalarFieldEnum | Prestamo_unidadlibroScalarFieldEnum[]
  }

  /**
   * prestamo_unidadlibro create
   */
  export type prestamo_unidadlibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * The data needed to create a prestamo_unidadlibro.
     */
    data: XOR<prestamo_unidadlibroCreateInput, prestamo_unidadlibroUncheckedCreateInput>
  }

  /**
   * prestamo_unidadlibro createMany
   */
  export type prestamo_unidadlibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prestamo_unidadlibros.
     */
    data: prestamo_unidadlibroCreateManyInput | prestamo_unidadlibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prestamo_unidadlibro createManyAndReturn
   */
  export type prestamo_unidadlibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * The data used to create many prestamo_unidadlibros.
     */
    data: prestamo_unidadlibroCreateManyInput | prestamo_unidadlibroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamo_unidadlibro update
   */
  export type prestamo_unidadlibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * The data needed to update a prestamo_unidadlibro.
     */
    data: XOR<prestamo_unidadlibroUpdateInput, prestamo_unidadlibroUncheckedUpdateInput>
    /**
     * Choose, which prestamo_unidadlibro to update.
     */
    where: prestamo_unidadlibroWhereUniqueInput
  }

  /**
   * prestamo_unidadlibro updateMany
   */
  export type prestamo_unidadlibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prestamo_unidadlibros.
     */
    data: XOR<prestamo_unidadlibroUpdateManyMutationInput, prestamo_unidadlibroUncheckedUpdateManyInput>
    /**
     * Filter which prestamo_unidadlibros to update
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * Limit how many prestamo_unidadlibros to update.
     */
    limit?: number
  }

  /**
   * prestamo_unidadlibro updateManyAndReturn
   */
  export type prestamo_unidadlibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * The data used to update prestamo_unidadlibros.
     */
    data: XOR<prestamo_unidadlibroUpdateManyMutationInput, prestamo_unidadlibroUncheckedUpdateManyInput>
    /**
     * Filter which prestamo_unidadlibros to update
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * Limit how many prestamo_unidadlibros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prestamo_unidadlibro upsert
   */
  export type prestamo_unidadlibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * The filter to search for the prestamo_unidadlibro to update in case it exists.
     */
    where: prestamo_unidadlibroWhereUniqueInput
    /**
     * In case the prestamo_unidadlibro found by the `where` argument doesn't exist, create a new prestamo_unidadlibro with this data.
     */
    create: XOR<prestamo_unidadlibroCreateInput, prestamo_unidadlibroUncheckedCreateInput>
    /**
     * In case the prestamo_unidadlibro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prestamo_unidadlibroUpdateInput, prestamo_unidadlibroUncheckedUpdateInput>
  }

  /**
   * prestamo_unidadlibro delete
   */
  export type prestamo_unidadlibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    /**
     * Filter which prestamo_unidadlibro to delete.
     */
    where: prestamo_unidadlibroWhereUniqueInput
  }

  /**
   * prestamo_unidadlibro deleteMany
   */
  export type prestamo_unidadlibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prestamo_unidadlibros to delete
     */
    where?: prestamo_unidadlibroWhereInput
    /**
     * Limit how many prestamo_unidadlibros to delete.
     */
    limit?: number
  }

  /**
   * prestamo_unidadlibro without action
   */
  export type prestamo_unidadlibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
  }


  /**
   * Model reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_unidad: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_unidad: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id_reserva: number | null
    fecha_reserva: Date | null
    estado_reserva: string | null
    id_usuario: number | null
    id_unidad: number | null
  }

  export type ReservaMaxAggregateOutputType = {
    id_reserva: number | null
    fecha_reserva: Date | null
    estado_reserva: string | null
    id_usuario: number | null
    id_unidad: number | null
  }

  export type ReservaCountAggregateOutputType = {
    id_reserva: number
    fecha_reserva: number
    estado_reserva: number
    id_usuario: number
    id_unidad: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_unidad?: true
  }

  export type ReservaSumAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_unidad?: true
  }

  export type ReservaMinAggregateInputType = {
    id_reserva?: true
    fecha_reserva?: true
    estado_reserva?: true
    id_usuario?: true
    id_unidad?: true
  }

  export type ReservaMaxAggregateInputType = {
    id_reserva?: true
    fecha_reserva?: true
    estado_reserva?: true
    id_usuario?: true
    id_unidad?: true
  }

  export type ReservaCountAggregateInputType = {
    id_reserva?: true
    fecha_reserva?: true
    estado_reserva?: true
    id_usuario?: true
    id_unidad?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva to aggregate.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type reservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithAggregationInput | reservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: reservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id_reserva: number
    fecha_reserva: Date | null
    estado_reserva: string
    id_usuario: number
    id_unidad: number
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends reservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type reservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    id_usuario?: boolean
    id_unidad?: boolean
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    id_usuario?: boolean
    id_unidad?: boolean
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    id_usuario?: boolean
    id_unidad?: boolean
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectScalar = {
    id_reserva?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    id_usuario?: boolean
    id_unidad?: boolean
  }

  export type reservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "fecha_reserva" | "estado_reserva" | "id_usuario" | "id_unidad", ExtArgs["result"]["reserva"]>
  export type reservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type reservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type reservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidadlibro?: boolean | unidadlibroDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $reservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva"
    objects: {
      unidadlibro: Prisma.$unidadlibroPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      fecha_reserva: Date | null
      estado_reserva: string
      id_usuario: number
      id_unidad: number
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type reservaGetPayload<S extends boolean | null | undefined | reservaDefaultArgs> = $Result.GetResult<Prisma.$reservaPayload, S>

  type reservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface reservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva'], meta: { name: 'reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {reservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservaFindUniqueArgs>(args: SelectSubset<T, reservaFindUniqueArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservaFindUniqueOrThrowArgs>(args: SelectSubset<T, reservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservaFindFirstArgs>(args?: SelectSubset<T, reservaFindFirstArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservaFindFirstOrThrowArgs>(args?: SelectSubset<T, reservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservaFindManyArgs>(args?: SelectSubset<T, reservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {reservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends reservaCreateArgs>(args: SelectSubset<T, reservaCreateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservaCreateManyArgs>(args?: SelectSubset<T, reservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservaCreateManyAndReturnArgs>(args?: SelectSubset<T, reservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {reservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends reservaDeleteArgs>(args: SelectSubset<T, reservaDeleteArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {reservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservaUpdateArgs>(args: SelectSubset<T, reservaUpdateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservaDeleteManyArgs>(args?: SelectSubset<T, reservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservaUpdateManyArgs>(args: SelectSubset<T, reservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id_reserva: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reservaUpdateManyAndReturnArgs>(args: SelectSubset<T, reservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {reservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends reservaUpsertArgs>(args: SelectSubset<T, reservaUpsertArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservaCountArgs>(
      args?: Subset<T, reservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservaGroupByArgs['orderBy'] }
        : { orderBy?: reservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva model
   */
  readonly fields: reservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unidadlibro<T extends unidadlibroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, unidadlibroDefaultArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserva model
   */
  interface reservaFieldRefs {
    readonly id_reserva: FieldRef<"reserva", 'Int'>
    readonly fecha_reserva: FieldRef<"reserva", 'DateTime'>
    readonly estado_reserva: FieldRef<"reserva", 'String'>
    readonly id_usuario: FieldRef<"reserva", 'Int'>
    readonly id_unidad: FieldRef<"reserva", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reserva findUnique
   */
  export type reservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findUniqueOrThrow
   */
  export type reservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findFirst
   */
  export type reservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findFirstOrThrow
   */
  export type reservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findMany
   */
  export type reservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva create
   */
  export type reservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva.
     */
    data: XOR<reservaCreateInput, reservaUncheckedCreateInput>
  }

  /**
   * reserva createMany
   */
  export type reservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva createManyAndReturn
   */
  export type reservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva update
   */
  export type reservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva.
     */
    data: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
    /**
     * Choose, which reserva to update.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva updateMany
   */
  export type reservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reserva updateManyAndReturn
   */
  export type reservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva upsert
   */
  export type reservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva to update in case it exists.
     */
    where: reservaWhereUniqueInput
    /**
     * In case the reserva found by the `where` argument doesn't exist, create a new reserva with this data.
     */
    create: XOR<reservaCreateInput, reservaUncheckedCreateInput>
    /**
     * In case the reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
  }

  /**
   * reserva delete
   */
  export type reservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter which reserva to delete.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva deleteMany
   */
  export type reservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reserva without action
   */
  export type reservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
  }


  /**
   * Model unidadlibro
   */

  export type AggregateUnidadlibro = {
    _count: UnidadlibroCountAggregateOutputType | null
    _avg: UnidadlibroAvgAggregateOutputType | null
    _sum: UnidadlibroSumAggregateOutputType | null
    _min: UnidadlibroMinAggregateOutputType | null
    _max: UnidadlibroMaxAggregateOutputType | null
  }

  export type UnidadlibroAvgAggregateOutputType = {
    id_unidad: number | null
    id_libro: number | null
  }

  export type UnidadlibroSumAggregateOutputType = {
    id_unidad: number | null
    id_libro: number | null
  }

  export type UnidadlibroMinAggregateOutputType = {
    id_unidad: number | null
    codigo_barra: string | null
    id_libro: number | null
    ubicacion_fisica: string | null
    estado_fisico: string | null
  }

  export type UnidadlibroMaxAggregateOutputType = {
    id_unidad: number | null
    codigo_barra: string | null
    id_libro: number | null
    ubicacion_fisica: string | null
    estado_fisico: string | null
  }

  export type UnidadlibroCountAggregateOutputType = {
    id_unidad: number
    codigo_barra: number
    id_libro: number
    ubicacion_fisica: number
    estado_fisico: number
    _all: number
  }


  export type UnidadlibroAvgAggregateInputType = {
    id_unidad?: true
    id_libro?: true
  }

  export type UnidadlibroSumAggregateInputType = {
    id_unidad?: true
    id_libro?: true
  }

  export type UnidadlibroMinAggregateInputType = {
    id_unidad?: true
    codigo_barra?: true
    id_libro?: true
    ubicacion_fisica?: true
    estado_fisico?: true
  }

  export type UnidadlibroMaxAggregateInputType = {
    id_unidad?: true
    codigo_barra?: true
    id_libro?: true
    ubicacion_fisica?: true
    estado_fisico?: true
  }

  export type UnidadlibroCountAggregateInputType = {
    id_unidad?: true
    codigo_barra?: true
    id_libro?: true
    ubicacion_fisica?: true
    estado_fisico?: true
    _all?: true
  }

  export type UnidadlibroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidadlibro to aggregate.
     */
    where?: unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidadlibros to fetch.
     */
    orderBy?: unidadlibroOrderByWithRelationInput | unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned unidadlibros
    **/
    _count?: true | UnidadlibroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadlibroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadlibroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadlibroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadlibroMaxAggregateInputType
  }

  export type GetUnidadlibroAggregateType<T extends UnidadlibroAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidadlibro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidadlibro[P]>
      : GetScalarType<T[P], AggregateUnidadlibro[P]>
  }




  export type unidadlibroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: unidadlibroWhereInput
    orderBy?: unidadlibroOrderByWithAggregationInput | unidadlibroOrderByWithAggregationInput[]
    by: UnidadlibroScalarFieldEnum[] | UnidadlibroScalarFieldEnum
    having?: unidadlibroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadlibroCountAggregateInputType | true
    _avg?: UnidadlibroAvgAggregateInputType
    _sum?: UnidadlibroSumAggregateInputType
    _min?: UnidadlibroMinAggregateInputType
    _max?: UnidadlibroMaxAggregateInputType
  }

  export type UnidadlibroGroupByOutputType = {
    id_unidad: number
    codigo_barra: string
    id_libro: number
    ubicacion_fisica: string
    estado_fisico: string
    _count: UnidadlibroCountAggregateOutputType | null
    _avg: UnidadlibroAvgAggregateOutputType | null
    _sum: UnidadlibroSumAggregateOutputType | null
    _min: UnidadlibroMinAggregateOutputType | null
    _max: UnidadlibroMaxAggregateOutputType | null
  }

  type GetUnidadlibroGroupByPayload<T extends unidadlibroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadlibroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadlibroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadlibroGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadlibroGroupByOutputType[P]>
        }
      >
    >


  export type unidadlibroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    codigo_barra?: boolean
    id_libro?: boolean
    ubicacion_fisica?: boolean
    estado_fisico?: boolean
    prestamo_unidadlibro?: boolean | unidadlibro$prestamo_unidadlibroArgs<ExtArgs>
    reserva?: boolean | unidadlibro$reservaArgs<ExtArgs>
    libro?: boolean | libroDefaultArgs<ExtArgs>
    _count?: boolean | UnidadlibroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidadlibro"]>

  export type unidadlibroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    codigo_barra?: boolean
    id_libro?: boolean
    ubicacion_fisica?: boolean
    estado_fisico?: boolean
    libro?: boolean | libroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidadlibro"]>

  export type unidadlibroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_unidad?: boolean
    codigo_barra?: boolean
    id_libro?: boolean
    ubicacion_fisica?: boolean
    estado_fisico?: boolean
    libro?: boolean | libroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidadlibro"]>

  export type unidadlibroSelectScalar = {
    id_unidad?: boolean
    codigo_barra?: boolean
    id_libro?: boolean
    ubicacion_fisica?: boolean
    estado_fisico?: boolean
  }

  export type unidadlibroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_unidad" | "codigo_barra" | "id_libro" | "ubicacion_fisica" | "estado_fisico", ExtArgs["result"]["unidadlibro"]>
  export type unidadlibroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prestamo_unidadlibro?: boolean | unidadlibro$prestamo_unidadlibroArgs<ExtArgs>
    reserva?: boolean | unidadlibro$reservaArgs<ExtArgs>
    libro?: boolean | libroDefaultArgs<ExtArgs>
    _count?: boolean | UnidadlibroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type unidadlibroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | libroDefaultArgs<ExtArgs>
  }
  export type unidadlibroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libro?: boolean | libroDefaultArgs<ExtArgs>
  }

  export type $unidadlibroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "unidadlibro"
    objects: {
      prestamo_unidadlibro: Prisma.$prestamo_unidadlibroPayload<ExtArgs>[]
      reserva: Prisma.$reservaPayload<ExtArgs>[]
      libro: Prisma.$libroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_unidad: number
      codigo_barra: string
      id_libro: number
      ubicacion_fisica: string
      estado_fisico: string
    }, ExtArgs["result"]["unidadlibro"]>
    composites: {}
  }

  type unidadlibroGetPayload<S extends boolean | null | undefined | unidadlibroDefaultArgs> = $Result.GetResult<Prisma.$unidadlibroPayload, S>

  type unidadlibroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<unidadlibroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadlibroCountAggregateInputType | true
    }

  export interface unidadlibroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['unidadlibro'], meta: { name: 'unidadlibro' } }
    /**
     * Find zero or one Unidadlibro that matches the filter.
     * @param {unidadlibroFindUniqueArgs} args - Arguments to find a Unidadlibro
     * @example
     * // Get one Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends unidadlibroFindUniqueArgs>(args: SelectSubset<T, unidadlibroFindUniqueArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidadlibro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {unidadlibroFindUniqueOrThrowArgs} args - Arguments to find a Unidadlibro
     * @example
     * // Get one Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends unidadlibroFindUniqueOrThrowArgs>(args: SelectSubset<T, unidadlibroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidadlibro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroFindFirstArgs} args - Arguments to find a Unidadlibro
     * @example
     * // Get one Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends unidadlibroFindFirstArgs>(args?: SelectSubset<T, unidadlibroFindFirstArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidadlibro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroFindFirstOrThrowArgs} args - Arguments to find a Unidadlibro
     * @example
     * // Get one Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends unidadlibroFindFirstOrThrowArgs>(args?: SelectSubset<T, unidadlibroFindFirstOrThrowArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidadlibros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidadlibros
     * const unidadlibros = await prisma.unidadlibro.findMany()
     * 
     * // Get first 10 Unidadlibros
     * const unidadlibros = await prisma.unidadlibro.findMany({ take: 10 })
     * 
     * // Only select the `id_unidad`
     * const unidadlibroWithId_unidadOnly = await prisma.unidadlibro.findMany({ select: { id_unidad: true } })
     * 
     */
    findMany<T extends unidadlibroFindManyArgs>(args?: SelectSubset<T, unidadlibroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidadlibro.
     * @param {unidadlibroCreateArgs} args - Arguments to create a Unidadlibro.
     * @example
     * // Create one Unidadlibro
     * const Unidadlibro = await prisma.unidadlibro.create({
     *   data: {
     *     // ... data to create a Unidadlibro
     *   }
     * })
     * 
     */
    create<T extends unidadlibroCreateArgs>(args: SelectSubset<T, unidadlibroCreateArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidadlibros.
     * @param {unidadlibroCreateManyArgs} args - Arguments to create many Unidadlibros.
     * @example
     * // Create many Unidadlibros
     * const unidadlibro = await prisma.unidadlibro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends unidadlibroCreateManyArgs>(args?: SelectSubset<T, unidadlibroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unidadlibros and returns the data saved in the database.
     * @param {unidadlibroCreateManyAndReturnArgs} args - Arguments to create many Unidadlibros.
     * @example
     * // Create many Unidadlibros
     * const unidadlibro = await prisma.unidadlibro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unidadlibros and only return the `id_unidad`
     * const unidadlibroWithId_unidadOnly = await prisma.unidadlibro.createManyAndReturn({
     *   select: { id_unidad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends unidadlibroCreateManyAndReturnArgs>(args?: SelectSubset<T, unidadlibroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unidadlibro.
     * @param {unidadlibroDeleteArgs} args - Arguments to delete one Unidadlibro.
     * @example
     * // Delete one Unidadlibro
     * const Unidadlibro = await prisma.unidadlibro.delete({
     *   where: {
     *     // ... filter to delete one Unidadlibro
     *   }
     * })
     * 
     */
    delete<T extends unidadlibroDeleteArgs>(args: SelectSubset<T, unidadlibroDeleteArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidadlibro.
     * @param {unidadlibroUpdateArgs} args - Arguments to update one Unidadlibro.
     * @example
     * // Update one Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends unidadlibroUpdateArgs>(args: SelectSubset<T, unidadlibroUpdateArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidadlibros.
     * @param {unidadlibroDeleteManyArgs} args - Arguments to filter Unidadlibros to delete.
     * @example
     * // Delete a few Unidadlibros
     * const { count } = await prisma.unidadlibro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends unidadlibroDeleteManyArgs>(args?: SelectSubset<T, unidadlibroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidadlibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidadlibros
     * const unidadlibro = await prisma.unidadlibro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends unidadlibroUpdateManyArgs>(args: SelectSubset<T, unidadlibroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidadlibros and returns the data updated in the database.
     * @param {unidadlibroUpdateManyAndReturnArgs} args - Arguments to update many Unidadlibros.
     * @example
     * // Update many Unidadlibros
     * const unidadlibro = await prisma.unidadlibro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unidadlibros and only return the `id_unidad`
     * const unidadlibroWithId_unidadOnly = await prisma.unidadlibro.updateManyAndReturn({
     *   select: { id_unidad: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends unidadlibroUpdateManyAndReturnArgs>(args: SelectSubset<T, unidadlibroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unidadlibro.
     * @param {unidadlibroUpsertArgs} args - Arguments to update or create a Unidadlibro.
     * @example
     * // Update or create a Unidadlibro
     * const unidadlibro = await prisma.unidadlibro.upsert({
     *   create: {
     *     // ... data to create a Unidadlibro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidadlibro we want to update
     *   }
     * })
     */
    upsert<T extends unidadlibroUpsertArgs>(args: SelectSubset<T, unidadlibroUpsertArgs<ExtArgs>>): Prisma__unidadlibroClient<$Result.GetResult<Prisma.$unidadlibroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unidadlibros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroCountArgs} args - Arguments to filter Unidadlibros to count.
     * @example
     * // Count the number of Unidadlibros
     * const count = await prisma.unidadlibro.count({
     *   where: {
     *     // ... the filter for the Unidadlibros we want to count
     *   }
     * })
    **/
    count<T extends unidadlibroCountArgs>(
      args?: Subset<T, unidadlibroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadlibroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidadlibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadlibroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadlibroAggregateArgs>(args: Subset<T, UnidadlibroAggregateArgs>): Prisma.PrismaPromise<GetUnidadlibroAggregateType<T>>

    /**
     * Group by Unidadlibro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {unidadlibroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends unidadlibroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: unidadlibroGroupByArgs['orderBy'] }
        : { orderBy?: unidadlibroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, unidadlibroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadlibroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the unidadlibro model
   */
  readonly fields: unidadlibroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for unidadlibro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__unidadlibroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prestamo_unidadlibro<T extends unidadlibro$prestamo_unidadlibroArgs<ExtArgs> = {}>(args?: Subset<T, unidadlibro$prestamo_unidadlibroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamo_unidadlibroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reserva<T extends unidadlibro$reservaArgs<ExtArgs> = {}>(args?: Subset<T, unidadlibro$reservaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libro<T extends libroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, libroDefaultArgs<ExtArgs>>): Prisma__libroClient<$Result.GetResult<Prisma.$libroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the unidadlibro model
   */
  interface unidadlibroFieldRefs {
    readonly id_unidad: FieldRef<"unidadlibro", 'Int'>
    readonly codigo_barra: FieldRef<"unidadlibro", 'String'>
    readonly id_libro: FieldRef<"unidadlibro", 'Int'>
    readonly ubicacion_fisica: FieldRef<"unidadlibro", 'String'>
    readonly estado_fisico: FieldRef<"unidadlibro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * unidadlibro findUnique
   */
  export type unidadlibroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which unidadlibro to fetch.
     */
    where: unidadlibroWhereUniqueInput
  }

  /**
   * unidadlibro findUniqueOrThrow
   */
  export type unidadlibroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which unidadlibro to fetch.
     */
    where: unidadlibroWhereUniqueInput
  }

  /**
   * unidadlibro findFirst
   */
  export type unidadlibroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which unidadlibro to fetch.
     */
    where?: unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidadlibros to fetch.
     */
    orderBy?: unidadlibroOrderByWithRelationInput | unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidadlibros.
     */
    cursor?: unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidadlibros.
     */
    distinct?: UnidadlibroScalarFieldEnum | UnidadlibroScalarFieldEnum[]
  }

  /**
   * unidadlibro findFirstOrThrow
   */
  export type unidadlibroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which unidadlibro to fetch.
     */
    where?: unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidadlibros to fetch.
     */
    orderBy?: unidadlibroOrderByWithRelationInput | unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for unidadlibros.
     */
    cursor?: unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidadlibros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of unidadlibros.
     */
    distinct?: UnidadlibroScalarFieldEnum | UnidadlibroScalarFieldEnum[]
  }

  /**
   * unidadlibro findMany
   */
  export type unidadlibroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter, which unidadlibros to fetch.
     */
    where?: unidadlibroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of unidadlibros to fetch.
     */
    orderBy?: unidadlibroOrderByWithRelationInput | unidadlibroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing unidadlibros.
     */
    cursor?: unidadlibroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` unidadlibros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` unidadlibros.
     */
    skip?: number
    distinct?: UnidadlibroScalarFieldEnum | UnidadlibroScalarFieldEnum[]
  }

  /**
   * unidadlibro create
   */
  export type unidadlibroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * The data needed to create a unidadlibro.
     */
    data: XOR<unidadlibroCreateInput, unidadlibroUncheckedCreateInput>
  }

  /**
   * unidadlibro createMany
   */
  export type unidadlibroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many unidadlibros.
     */
    data: unidadlibroCreateManyInput | unidadlibroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * unidadlibro createManyAndReturn
   */
  export type unidadlibroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * The data used to create many unidadlibros.
     */
    data: unidadlibroCreateManyInput | unidadlibroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * unidadlibro update
   */
  export type unidadlibroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * The data needed to update a unidadlibro.
     */
    data: XOR<unidadlibroUpdateInput, unidadlibroUncheckedUpdateInput>
    /**
     * Choose, which unidadlibro to update.
     */
    where: unidadlibroWhereUniqueInput
  }

  /**
   * unidadlibro updateMany
   */
  export type unidadlibroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update unidadlibros.
     */
    data: XOR<unidadlibroUpdateManyMutationInput, unidadlibroUncheckedUpdateManyInput>
    /**
     * Filter which unidadlibros to update
     */
    where?: unidadlibroWhereInput
    /**
     * Limit how many unidadlibros to update.
     */
    limit?: number
  }

  /**
   * unidadlibro updateManyAndReturn
   */
  export type unidadlibroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * The data used to update unidadlibros.
     */
    data: XOR<unidadlibroUpdateManyMutationInput, unidadlibroUncheckedUpdateManyInput>
    /**
     * Filter which unidadlibros to update
     */
    where?: unidadlibroWhereInput
    /**
     * Limit how many unidadlibros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * unidadlibro upsert
   */
  export type unidadlibroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * The filter to search for the unidadlibro to update in case it exists.
     */
    where: unidadlibroWhereUniqueInput
    /**
     * In case the unidadlibro found by the `where` argument doesn't exist, create a new unidadlibro with this data.
     */
    create: XOR<unidadlibroCreateInput, unidadlibroUncheckedCreateInput>
    /**
     * In case the unidadlibro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<unidadlibroUpdateInput, unidadlibroUncheckedUpdateInput>
  }

  /**
   * unidadlibro delete
   */
  export type unidadlibroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
    /**
     * Filter which unidadlibro to delete.
     */
    where: unidadlibroWhereUniqueInput
  }

  /**
   * unidadlibro deleteMany
   */
  export type unidadlibroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which unidadlibros to delete
     */
    where?: unidadlibroWhereInput
    /**
     * Limit how many unidadlibros to delete.
     */
    limit?: number
  }

  /**
   * unidadlibro.prestamo_unidadlibro
   */
  export type unidadlibro$prestamo_unidadlibroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo_unidadlibro
     */
    select?: prestamo_unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo_unidadlibro
     */
    omit?: prestamo_unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamo_unidadlibroInclude<ExtArgs> | null
    where?: prestamo_unidadlibroWhereInput
    orderBy?: prestamo_unidadlibroOrderByWithRelationInput | prestamo_unidadlibroOrderByWithRelationInput[]
    cursor?: prestamo_unidadlibroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Prestamo_unidadlibroScalarFieldEnum | Prestamo_unidadlibroScalarFieldEnum[]
  }

  /**
   * unidadlibro.reserva
   */
  export type unidadlibro$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    cursor?: reservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * unidadlibro without action
   */
  export type unidadlibroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the unidadlibro
     */
    select?: unidadlibroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the unidadlibro
     */
    omit?: unidadlibroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: unidadlibroInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    tipo_usuario: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    direccion: string | null
    tipo_usuario: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    direccion: number
    tipo_usuario: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    direccion?: true
    tipo_usuario?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    direccion?: true
    tipo_usuario?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    direccion?: true
    tipo_usuario?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    tipo_usuario?: boolean
    historial_acceso?: boolean | usuario$historial_accesoArgs<ExtArgs>
    prestamo?: boolean | usuario$prestamoArgs<ExtArgs>
    reserva?: boolean | usuario$reservaArgs<ExtArgs>
    usuario_categoria_interes?: boolean | usuario$usuario_categoria_interesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    tipo_usuario?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    direccion?: boolean
    tipo_usuario?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "apellido" | "email" | "telefono" | "direccion" | "tipo_usuario", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_acceso?: boolean | usuario$historial_accesoArgs<ExtArgs>
    prestamo?: boolean | usuario$prestamoArgs<ExtArgs>
    reserva?: boolean | usuario$reservaArgs<ExtArgs>
    usuario_categoria_interes?: boolean | usuario$usuario_categoria_interesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      historial_acceso: Prisma.$historial_accesoPayload<ExtArgs>[]
      prestamo: Prisma.$prestamoPayload<ExtArgs>[]
      reserva: Prisma.$reservaPayload<ExtArgs>[]
      usuario_categoria_interes: Prisma.$usuario_categoria_interesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      nombre: string
      apellido: string
      email: string
      telefono: string
      direccion: string
      tipo_usuario: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_acceso<T extends usuario$historial_accesoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$historial_accesoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_accesoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prestamo<T extends usuario$prestamoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$prestamoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prestamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reserva<T extends usuario$reservaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$reservaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario_categoria_interes<T extends usuario$usuario_categoria_interesArgs<ExtArgs> = {}>(args?: Subset<T, usuario$usuario_categoria_interesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'Int'>
    readonly nombre: FieldRef<"usuario", 'String'>
    readonly apellido: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly telefono: FieldRef<"usuario", 'String'>
    readonly direccion: FieldRef<"usuario", 'String'>
    readonly tipo_usuario: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.historial_acceso
   */
  export type usuario$historial_accesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_acceso
     */
    select?: historial_accesoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_acceso
     */
    omit?: historial_accesoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_accesoInclude<ExtArgs> | null
    where?: historial_accesoWhereInput
    orderBy?: historial_accesoOrderByWithRelationInput | historial_accesoOrderByWithRelationInput[]
    cursor?: historial_accesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historial_accesoScalarFieldEnum | Historial_accesoScalarFieldEnum[]
  }

  /**
   * usuario.prestamo
   */
  export type usuario$prestamoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prestamo
     */
    select?: prestamoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prestamo
     */
    omit?: prestamoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prestamoInclude<ExtArgs> | null
    where?: prestamoWhereInput
    orderBy?: prestamoOrderByWithRelationInput | prestamoOrderByWithRelationInput[]
    cursor?: prestamoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrestamoScalarFieldEnum | PrestamoScalarFieldEnum[]
  }

  /**
   * usuario.reserva
   */
  export type usuario$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    cursor?: reservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * usuario.usuario_categoria_interes
   */
  export type usuario$usuario_categoria_interesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    where?: usuario_categoria_interesWhereInput
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    cursor?: usuario_categoria_interesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Usuario_categoria_interesScalarFieldEnum | Usuario_categoria_interesScalarFieldEnum[]
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model usuario_categoria_interes
   */

  export type AggregateUsuario_categoria_interes = {
    _count: Usuario_categoria_interesCountAggregateOutputType | null
    _avg: Usuario_categoria_interesAvgAggregateOutputType | null
    _sum: Usuario_categoria_interesSumAggregateOutputType | null
    _min: Usuario_categoria_interesMinAggregateOutputType | null
    _max: Usuario_categoria_interesMaxAggregateOutputType | null
  }

  export type Usuario_categoria_interesAvgAggregateOutputType = {
    id_usuario: number | null
    id_categoria: number | null
  }

  export type Usuario_categoria_interesSumAggregateOutputType = {
    id_usuario: number | null
    id_categoria: number | null
  }

  export type Usuario_categoria_interesMinAggregateOutputType = {
    id_usuario: number | null
    id_categoria: number | null
  }

  export type Usuario_categoria_interesMaxAggregateOutputType = {
    id_usuario: number | null
    id_categoria: number | null
  }

  export type Usuario_categoria_interesCountAggregateOutputType = {
    id_usuario: number
    id_categoria: number
    _all: number
  }


  export type Usuario_categoria_interesAvgAggregateInputType = {
    id_usuario?: true
    id_categoria?: true
  }

  export type Usuario_categoria_interesSumAggregateInputType = {
    id_usuario?: true
    id_categoria?: true
  }

  export type Usuario_categoria_interesMinAggregateInputType = {
    id_usuario?: true
    id_categoria?: true
  }

  export type Usuario_categoria_interesMaxAggregateInputType = {
    id_usuario?: true
    id_categoria?: true
  }

  export type Usuario_categoria_interesCountAggregateInputType = {
    id_usuario?: true
    id_categoria?: true
    _all?: true
  }

  export type Usuario_categoria_interesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_categoria_interes to aggregate.
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_categoria_interes to fetch.
     */
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuario_categoria_interesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_categoria_interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_categoria_interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuario_categoria_interes
    **/
    _count?: true | Usuario_categoria_interesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Usuario_categoria_interesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Usuario_categoria_interesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Usuario_categoria_interesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Usuario_categoria_interesMaxAggregateInputType
  }

  export type GetUsuario_categoria_interesAggregateType<T extends Usuario_categoria_interesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario_categoria_interes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario_categoria_interes[P]>
      : GetScalarType<T[P], AggregateUsuario_categoria_interes[P]>
  }




  export type usuario_categoria_interesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuario_categoria_interesWhereInput
    orderBy?: usuario_categoria_interesOrderByWithAggregationInput | usuario_categoria_interesOrderByWithAggregationInput[]
    by: Usuario_categoria_interesScalarFieldEnum[] | Usuario_categoria_interesScalarFieldEnum
    having?: usuario_categoria_interesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Usuario_categoria_interesCountAggregateInputType | true
    _avg?: Usuario_categoria_interesAvgAggregateInputType
    _sum?: Usuario_categoria_interesSumAggregateInputType
    _min?: Usuario_categoria_interesMinAggregateInputType
    _max?: Usuario_categoria_interesMaxAggregateInputType
  }

  export type Usuario_categoria_interesGroupByOutputType = {
    id_usuario: number
    id_categoria: number
    _count: Usuario_categoria_interesCountAggregateOutputType | null
    _avg: Usuario_categoria_interesAvgAggregateOutputType | null
    _sum: Usuario_categoria_interesSumAggregateOutputType | null
    _min: Usuario_categoria_interesMinAggregateOutputType | null
    _max: Usuario_categoria_interesMaxAggregateOutputType | null
  }

  type GetUsuario_categoria_interesGroupByPayload<T extends usuario_categoria_interesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Usuario_categoria_interesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Usuario_categoria_interesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Usuario_categoria_interesGroupByOutputType[P]>
            : GetScalarType<T[P], Usuario_categoria_interesGroupByOutputType[P]>
        }
      >
    >


  export type usuario_categoria_interesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_categoria?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_categoria_interes"]>

  export type usuario_categoria_interesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_categoria?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_categoria_interes"]>

  export type usuario_categoria_interesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    id_categoria?: boolean
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario_categoria_interes"]>

  export type usuario_categoria_interesSelectScalar = {
    id_usuario?: boolean
    id_categoria?: boolean
  }

  export type usuario_categoria_interesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "id_categoria", ExtArgs["result"]["usuario_categoria_interes"]>
  export type usuario_categoria_interesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_categoria_interesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type usuario_categoria_interesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | categoriaDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $usuario_categoria_interesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario_categoria_interes"
    objects: {
      categoria: Prisma.$categoriaPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      id_categoria: number
    }, ExtArgs["result"]["usuario_categoria_interes"]>
    composites: {}
  }

  type usuario_categoria_interesGetPayload<S extends boolean | null | undefined | usuario_categoria_interesDefaultArgs> = $Result.GetResult<Prisma.$usuario_categoria_interesPayload, S>

  type usuario_categoria_interesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuario_categoria_interesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Usuario_categoria_interesCountAggregateInputType | true
    }

  export interface usuario_categoria_interesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario_categoria_interes'], meta: { name: 'usuario_categoria_interes' } }
    /**
     * Find zero or one Usuario_categoria_interes that matches the filter.
     * @param {usuario_categoria_interesFindUniqueArgs} args - Arguments to find a Usuario_categoria_interes
     * @example
     * // Get one Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuario_categoria_interesFindUniqueArgs>(args: SelectSubset<T, usuario_categoria_interesFindUniqueArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario_categoria_interes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuario_categoria_interesFindUniqueOrThrowArgs} args - Arguments to find a Usuario_categoria_interes
     * @example
     * // Get one Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuario_categoria_interesFindUniqueOrThrowArgs>(args: SelectSubset<T, usuario_categoria_interesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_categoria_interes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesFindFirstArgs} args - Arguments to find a Usuario_categoria_interes
     * @example
     * // Get one Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuario_categoria_interesFindFirstArgs>(args?: SelectSubset<T, usuario_categoria_interesFindFirstArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario_categoria_interes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesFindFirstOrThrowArgs} args - Arguments to find a Usuario_categoria_interes
     * @example
     * // Get one Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuario_categoria_interesFindFirstOrThrowArgs>(args?: SelectSubset<T, usuario_categoria_interesFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuario_categoria_interes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findMany()
     * 
     * // Get first 10 Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuario_categoria_interesWithId_usuarioOnly = await prisma.usuario_categoria_interes.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuario_categoria_interesFindManyArgs>(args?: SelectSubset<T, usuario_categoria_interesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario_categoria_interes.
     * @param {usuario_categoria_interesCreateArgs} args - Arguments to create a Usuario_categoria_interes.
     * @example
     * // Create one Usuario_categoria_interes
     * const Usuario_categoria_interes = await prisma.usuario_categoria_interes.create({
     *   data: {
     *     // ... data to create a Usuario_categoria_interes
     *   }
     * })
     * 
     */
    create<T extends usuario_categoria_interesCreateArgs>(args: SelectSubset<T, usuario_categoria_interesCreateArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuario_categoria_interes.
     * @param {usuario_categoria_interesCreateManyArgs} args - Arguments to create many Usuario_categoria_interes.
     * @example
     * // Create many Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuario_categoria_interesCreateManyArgs>(args?: SelectSubset<T, usuario_categoria_interesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuario_categoria_interes and returns the data saved in the database.
     * @param {usuario_categoria_interesCreateManyAndReturnArgs} args - Arguments to create many Usuario_categoria_interes.
     * @example
     * // Create many Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuario_categoria_interes and only return the `id_usuario`
     * const usuario_categoria_interesWithId_usuarioOnly = await prisma.usuario_categoria_interes.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuario_categoria_interesCreateManyAndReturnArgs>(args?: SelectSubset<T, usuario_categoria_interesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario_categoria_interes.
     * @param {usuario_categoria_interesDeleteArgs} args - Arguments to delete one Usuario_categoria_interes.
     * @example
     * // Delete one Usuario_categoria_interes
     * const Usuario_categoria_interes = await prisma.usuario_categoria_interes.delete({
     *   where: {
     *     // ... filter to delete one Usuario_categoria_interes
     *   }
     * })
     * 
     */
    delete<T extends usuario_categoria_interesDeleteArgs>(args: SelectSubset<T, usuario_categoria_interesDeleteArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario_categoria_interes.
     * @param {usuario_categoria_interesUpdateArgs} args - Arguments to update one Usuario_categoria_interes.
     * @example
     * // Update one Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuario_categoria_interesUpdateArgs>(args: SelectSubset<T, usuario_categoria_interesUpdateArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuario_categoria_interes.
     * @param {usuario_categoria_interesDeleteManyArgs} args - Arguments to filter Usuario_categoria_interes to delete.
     * @example
     * // Delete a few Usuario_categoria_interes
     * const { count } = await prisma.usuario_categoria_interes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuario_categoria_interesDeleteManyArgs>(args?: SelectSubset<T, usuario_categoria_interesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_categoria_interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuario_categoria_interesUpdateManyArgs>(args: SelectSubset<T, usuario_categoria_interesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuario_categoria_interes and returns the data updated in the database.
     * @param {usuario_categoria_interesUpdateManyAndReturnArgs} args - Arguments to update many Usuario_categoria_interes.
     * @example
     * // Update many Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuario_categoria_interes and only return the `id_usuario`
     * const usuario_categoria_interesWithId_usuarioOnly = await prisma.usuario_categoria_interes.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuario_categoria_interesUpdateManyAndReturnArgs>(args: SelectSubset<T, usuario_categoria_interesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario_categoria_interes.
     * @param {usuario_categoria_interesUpsertArgs} args - Arguments to update or create a Usuario_categoria_interes.
     * @example
     * // Update or create a Usuario_categoria_interes
     * const usuario_categoria_interes = await prisma.usuario_categoria_interes.upsert({
     *   create: {
     *     // ... data to create a Usuario_categoria_interes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario_categoria_interes we want to update
     *   }
     * })
     */
    upsert<T extends usuario_categoria_interesUpsertArgs>(args: SelectSubset<T, usuario_categoria_interesUpsertArgs<ExtArgs>>): Prisma__usuario_categoria_interesClient<$Result.GetResult<Prisma.$usuario_categoria_interesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuario_categoria_interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesCountArgs} args - Arguments to filter Usuario_categoria_interes to count.
     * @example
     * // Count the number of Usuario_categoria_interes
     * const count = await prisma.usuario_categoria_interes.count({
     *   where: {
     *     // ... the filter for the Usuario_categoria_interes we want to count
     *   }
     * })
    **/
    count<T extends usuario_categoria_interesCountArgs>(
      args?: Subset<T, usuario_categoria_interesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Usuario_categoria_interesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario_categoria_interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Usuario_categoria_interesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Usuario_categoria_interesAggregateArgs>(args: Subset<T, Usuario_categoria_interesAggregateArgs>): Prisma.PrismaPromise<GetUsuario_categoria_interesAggregateType<T>>

    /**
     * Group by Usuario_categoria_interes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuario_categoria_interesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuario_categoria_interesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuario_categoria_interesGroupByArgs['orderBy'] }
        : { orderBy?: usuario_categoria_interesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuario_categoria_interesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_categoria_interesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario_categoria_interes model
   */
  readonly fields: usuario_categoria_interesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario_categoria_interes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuario_categoria_interesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends categoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriaDefaultArgs<ExtArgs>>): Prisma__categoriaClient<$Result.GetResult<Prisma.$categoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario_categoria_interes model
   */
  interface usuario_categoria_interesFieldRefs {
    readonly id_usuario: FieldRef<"usuario_categoria_interes", 'Int'>
    readonly id_categoria: FieldRef<"usuario_categoria_interes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuario_categoria_interes findUnique
   */
  export type usuario_categoria_interesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter, which usuario_categoria_interes to fetch.
     */
    where: usuario_categoria_interesWhereUniqueInput
  }

  /**
   * usuario_categoria_interes findUniqueOrThrow
   */
  export type usuario_categoria_interesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter, which usuario_categoria_interes to fetch.
     */
    where: usuario_categoria_interesWhereUniqueInput
  }

  /**
   * usuario_categoria_interes findFirst
   */
  export type usuario_categoria_interesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter, which usuario_categoria_interes to fetch.
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_categoria_interes to fetch.
     */
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_categoria_interes.
     */
    cursor?: usuario_categoria_interesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_categoria_interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_categoria_interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_categoria_interes.
     */
    distinct?: Usuario_categoria_interesScalarFieldEnum | Usuario_categoria_interesScalarFieldEnum[]
  }

  /**
   * usuario_categoria_interes findFirstOrThrow
   */
  export type usuario_categoria_interesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter, which usuario_categoria_interes to fetch.
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_categoria_interes to fetch.
     */
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuario_categoria_interes.
     */
    cursor?: usuario_categoria_interesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_categoria_interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_categoria_interes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuario_categoria_interes.
     */
    distinct?: Usuario_categoria_interesScalarFieldEnum | Usuario_categoria_interesScalarFieldEnum[]
  }

  /**
   * usuario_categoria_interes findMany
   */
  export type usuario_categoria_interesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter, which usuario_categoria_interes to fetch.
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuario_categoria_interes to fetch.
     */
    orderBy?: usuario_categoria_interesOrderByWithRelationInput | usuario_categoria_interesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuario_categoria_interes.
     */
    cursor?: usuario_categoria_interesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuario_categoria_interes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuario_categoria_interes.
     */
    skip?: number
    distinct?: Usuario_categoria_interesScalarFieldEnum | Usuario_categoria_interesScalarFieldEnum[]
  }

  /**
   * usuario_categoria_interes create
   */
  export type usuario_categoria_interesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario_categoria_interes.
     */
    data: XOR<usuario_categoria_interesCreateInput, usuario_categoria_interesUncheckedCreateInput>
  }

  /**
   * usuario_categoria_interes createMany
   */
  export type usuario_categoria_interesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuario_categoria_interes.
     */
    data: usuario_categoria_interesCreateManyInput | usuario_categoria_interesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario_categoria_interes createManyAndReturn
   */
  export type usuario_categoria_interesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * The data used to create many usuario_categoria_interes.
     */
    data: usuario_categoria_interesCreateManyInput | usuario_categoria_interesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_categoria_interes update
   */
  export type usuario_categoria_interesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario_categoria_interes.
     */
    data: XOR<usuario_categoria_interesUpdateInput, usuario_categoria_interesUncheckedUpdateInput>
    /**
     * Choose, which usuario_categoria_interes to update.
     */
    where: usuario_categoria_interesWhereUniqueInput
  }

  /**
   * usuario_categoria_interes updateMany
   */
  export type usuario_categoria_interesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuario_categoria_interes.
     */
    data: XOR<usuario_categoria_interesUpdateManyMutationInput, usuario_categoria_interesUncheckedUpdateManyInput>
    /**
     * Filter which usuario_categoria_interes to update
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * Limit how many usuario_categoria_interes to update.
     */
    limit?: number
  }

  /**
   * usuario_categoria_interes updateManyAndReturn
   */
  export type usuario_categoria_interesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * The data used to update usuario_categoria_interes.
     */
    data: XOR<usuario_categoria_interesUpdateManyMutationInput, usuario_categoria_interesUncheckedUpdateManyInput>
    /**
     * Filter which usuario_categoria_interes to update
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * Limit how many usuario_categoria_interes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuario_categoria_interes upsert
   */
  export type usuario_categoria_interesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario_categoria_interes to update in case it exists.
     */
    where: usuario_categoria_interesWhereUniqueInput
    /**
     * In case the usuario_categoria_interes found by the `where` argument doesn't exist, create a new usuario_categoria_interes with this data.
     */
    create: XOR<usuario_categoria_interesCreateInput, usuario_categoria_interesUncheckedCreateInput>
    /**
     * In case the usuario_categoria_interes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuario_categoria_interesUpdateInput, usuario_categoria_interesUncheckedUpdateInput>
  }

  /**
   * usuario_categoria_interes delete
   */
  export type usuario_categoria_interesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
    /**
     * Filter which usuario_categoria_interes to delete.
     */
    where: usuario_categoria_interesWhereUniqueInput
  }

  /**
   * usuario_categoria_interes deleteMany
   */
  export type usuario_categoria_interesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario_categoria_interes to delete
     */
    where?: usuario_categoria_interesWhereInput
    /**
     * Limit how many usuario_categoria_interes to delete.
     */
    limit?: number
  }

  /**
   * usuario_categoria_interes without action
   */
  export type usuario_categoria_interesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario_categoria_interes
     */
    select?: usuario_categoria_interesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario_categoria_interes
     */
    omit?: usuario_categoria_interesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuario_categoria_interesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriaScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre_categoria: 'nombre_categoria',
    descripcion: 'descripcion'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const EditorialScalarFieldEnum: {
    id_editorial: 'id_editorial',
    nombre: 'nombre',
    pais: 'pais',
    anio_fundacion: 'anio_fundacion'
  };

  export type EditorialScalarFieldEnum = (typeof EditorialScalarFieldEnum)[keyof typeof EditorialScalarFieldEnum]


  export const Historial_accesoScalarFieldEnum: {
    id_acceso: 'id_acceso',
    id_usuario: 'id_usuario',
    id_libro: 'id_libro',
    fecha_consulta: 'fecha_consulta',
    tipo_acceso: 'tipo_acceso'
  };

  export type Historial_accesoScalarFieldEnum = (typeof Historial_accesoScalarFieldEnum)[keyof typeof Historial_accesoScalarFieldEnum]


  export const LibroScalarFieldEnum: {
    id_libro: 'id_libro',
    titulo: 'titulo',
    isbn: 'isbn',
    anio_publicacion: 'anio_publicacion',
    idioma: 'idioma',
    resumen: 'resumen',
    autores: 'autores',
    id_editorial: 'id_editorial',
    id_categoria: 'id_categoria'
  };

  export type LibroScalarFieldEnum = (typeof LibroScalarFieldEnum)[keyof typeof LibroScalarFieldEnum]


  export const PrestamoScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    fecha_prestamo: 'fecha_prestamo',
    fecha_entrega: 'fecha_entrega',
    id_usuario: 'id_usuario',
    estado_prestamo: 'estado_prestamo'
  };

  export type PrestamoScalarFieldEnum = (typeof PrestamoScalarFieldEnum)[keyof typeof PrestamoScalarFieldEnum]


  export const Prestamo_unidadlibroScalarFieldEnum: {
    id_prestamo: 'id_prestamo',
    id_unidad: 'id_unidad'
  };

  export type Prestamo_unidadlibroScalarFieldEnum = (typeof Prestamo_unidadlibroScalarFieldEnum)[keyof typeof Prestamo_unidadlibroScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id_reserva: 'id_reserva',
    fecha_reserva: 'fecha_reserva',
    estado_reserva: 'estado_reserva',
    id_usuario: 'id_usuario',
    id_unidad: 'id_unidad'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const UnidadlibroScalarFieldEnum: {
    id_unidad: 'id_unidad',
    codigo_barra: 'codigo_barra',
    id_libro: 'id_libro',
    ubicacion_fisica: 'ubicacion_fisica',
    estado_fisico: 'estado_fisico'
  };

  export type UnidadlibroScalarFieldEnum = (typeof UnidadlibroScalarFieldEnum)[keyof typeof UnidadlibroScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    tipo_usuario: 'tipo_usuario'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Usuario_categoria_interesScalarFieldEnum: {
    id_usuario: 'id_usuario',
    id_categoria: 'id_categoria'
  };

  export type Usuario_categoria_interesScalarFieldEnum = (typeof Usuario_categoria_interesScalarFieldEnum)[keyof typeof Usuario_categoria_interesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriaWhereInput = {
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    id_categoria?: IntFilter<"categoria"> | number
    nombre_categoria?: StringFilter<"categoria"> | string
    descripcion?: StringNullableFilter<"categoria"> | string | null
    libro?: LibroListRelationFilter
    usuario_categoria_interes?: Usuario_categoria_interesListRelationFilter
  }

  export type categoriaOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    libro?: libroOrderByRelationAggregateInput
    usuario_categoria_interes?: usuario_categoria_interesOrderByRelationAggregateInput
  }

  export type categoriaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number
    nombre_categoria?: string
    AND?: categoriaWhereInput | categoriaWhereInput[]
    OR?: categoriaWhereInput[]
    NOT?: categoriaWhereInput | categoriaWhereInput[]
    descripcion?: StringNullableFilter<"categoria"> | string | null
    libro?: LibroListRelationFilter
    usuario_categoria_interes?: Usuario_categoria_interesListRelationFilter
  }, "id_categoria" | "nombre_categoria">

  export type categoriaOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: categoriaCountOrderByAggregateInput
    _avg?: categoriaAvgOrderByAggregateInput
    _max?: categoriaMaxOrderByAggregateInput
    _min?: categoriaMinOrderByAggregateInput
    _sum?: categoriaSumOrderByAggregateInput
  }

  export type categoriaScalarWhereWithAggregatesInput = {
    AND?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    OR?: categoriaScalarWhereWithAggregatesInput[]
    NOT?: categoriaScalarWhereWithAggregatesInput | categoriaScalarWhereWithAggregatesInput[]
    id_categoria?: IntWithAggregatesFilter<"categoria"> | number
    nombre_categoria?: StringWithAggregatesFilter<"categoria"> | string
    descripcion?: StringNullableWithAggregatesFilter<"categoria"> | string | null
  }

  export type editorialWhereInput = {
    AND?: editorialWhereInput | editorialWhereInput[]
    OR?: editorialWhereInput[]
    NOT?: editorialWhereInput | editorialWhereInput[]
    id_editorial?: IntFilter<"editorial"> | number
    nombre?: StringFilter<"editorial"> | string
    pais?: StringFilter<"editorial"> | string
    anio_fundacion?: IntNullableFilter<"editorial"> | number | null
    libro?: LibroListRelationFilter
  }

  export type editorialOrderByWithRelationInput = {
    id_editorial?: SortOrder
    nombre?: SortOrder
    pais?: SortOrder
    anio_fundacion?: SortOrderInput | SortOrder
    libro?: libroOrderByRelationAggregateInput
  }

  export type editorialWhereUniqueInput = Prisma.AtLeast<{
    id_editorial?: number
    nombre?: string
    AND?: editorialWhereInput | editorialWhereInput[]
    OR?: editorialWhereInput[]
    NOT?: editorialWhereInput | editorialWhereInput[]
    pais?: StringFilter<"editorial"> | string
    anio_fundacion?: IntNullableFilter<"editorial"> | number | null
    libro?: LibroListRelationFilter
  }, "id_editorial" | "nombre">

  export type editorialOrderByWithAggregationInput = {
    id_editorial?: SortOrder
    nombre?: SortOrder
    pais?: SortOrder
    anio_fundacion?: SortOrderInput | SortOrder
    _count?: editorialCountOrderByAggregateInput
    _avg?: editorialAvgOrderByAggregateInput
    _max?: editorialMaxOrderByAggregateInput
    _min?: editorialMinOrderByAggregateInput
    _sum?: editorialSumOrderByAggregateInput
  }

  export type editorialScalarWhereWithAggregatesInput = {
    AND?: editorialScalarWhereWithAggregatesInput | editorialScalarWhereWithAggregatesInput[]
    OR?: editorialScalarWhereWithAggregatesInput[]
    NOT?: editorialScalarWhereWithAggregatesInput | editorialScalarWhereWithAggregatesInput[]
    id_editorial?: IntWithAggregatesFilter<"editorial"> | number
    nombre?: StringWithAggregatesFilter<"editorial"> | string
    pais?: StringWithAggregatesFilter<"editorial"> | string
    anio_fundacion?: IntNullableWithAggregatesFilter<"editorial"> | number | null
  }

  export type historial_accesoWhereInput = {
    AND?: historial_accesoWhereInput | historial_accesoWhereInput[]
    OR?: historial_accesoWhereInput[]
    NOT?: historial_accesoWhereInput | historial_accesoWhereInput[]
    id_acceso?: IntFilter<"historial_acceso"> | number
    id_usuario?: IntFilter<"historial_acceso"> | number
    id_libro?: IntFilter<"historial_acceso"> | number
    fecha_consulta?: DateTimeNullableFilter<"historial_acceso"> | Date | string | null
    tipo_acceso?: StringNullableFilter<"historial_acceso"> | string | null
    libro?: XOR<LibroScalarRelationFilter, libroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type historial_accesoOrderByWithRelationInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
    fecha_consulta?: SortOrderInput | SortOrder
    tipo_acceso?: SortOrderInput | SortOrder
    libro?: libroOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type historial_accesoWhereUniqueInput = Prisma.AtLeast<{
    id_acceso?: number
    AND?: historial_accesoWhereInput | historial_accesoWhereInput[]
    OR?: historial_accesoWhereInput[]
    NOT?: historial_accesoWhereInput | historial_accesoWhereInput[]
    id_usuario?: IntFilter<"historial_acceso"> | number
    id_libro?: IntFilter<"historial_acceso"> | number
    fecha_consulta?: DateTimeNullableFilter<"historial_acceso"> | Date | string | null
    tipo_acceso?: StringNullableFilter<"historial_acceso"> | string | null
    libro?: XOR<LibroScalarRelationFilter, libroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_acceso">

  export type historial_accesoOrderByWithAggregationInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
    fecha_consulta?: SortOrderInput | SortOrder
    tipo_acceso?: SortOrderInput | SortOrder
    _count?: historial_accesoCountOrderByAggregateInput
    _avg?: historial_accesoAvgOrderByAggregateInput
    _max?: historial_accesoMaxOrderByAggregateInput
    _min?: historial_accesoMinOrderByAggregateInput
    _sum?: historial_accesoSumOrderByAggregateInput
  }

  export type historial_accesoScalarWhereWithAggregatesInput = {
    AND?: historial_accesoScalarWhereWithAggregatesInput | historial_accesoScalarWhereWithAggregatesInput[]
    OR?: historial_accesoScalarWhereWithAggregatesInput[]
    NOT?: historial_accesoScalarWhereWithAggregatesInput | historial_accesoScalarWhereWithAggregatesInput[]
    id_acceso?: IntWithAggregatesFilter<"historial_acceso"> | number
    id_usuario?: IntWithAggregatesFilter<"historial_acceso"> | number
    id_libro?: IntWithAggregatesFilter<"historial_acceso"> | number
    fecha_consulta?: DateTimeNullableWithAggregatesFilter<"historial_acceso"> | Date | string | null
    tipo_acceso?: StringNullableWithAggregatesFilter<"historial_acceso"> | string | null
  }

  export type libroWhereInput = {
    AND?: libroWhereInput | libroWhereInput[]
    OR?: libroWhereInput[]
    NOT?: libroWhereInput | libroWhereInput[]
    id_libro?: IntFilter<"libro"> | number
    titulo?: StringFilter<"libro"> | string
    isbn?: StringFilter<"libro"> | string
    anio_publicacion?: IntNullableFilter<"libro"> | number | null
    idioma?: StringFilter<"libro"> | string
    resumen?: StringNullableFilter<"libro"> | string | null
    autores?: StringNullableListFilter<"libro">
    id_editorial?: IntFilter<"libro"> | number
    id_categoria?: IntFilter<"libro"> | number
    historial_acceso?: Historial_accesoListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    editorial?: XOR<EditorialScalarRelationFilter, editorialWhereInput>
    unidadlibro?: UnidadlibroListRelationFilter
  }

  export type libroOrderByWithRelationInput = {
    id_libro?: SortOrder
    titulo?: SortOrder
    isbn?: SortOrder
    anio_publicacion?: SortOrderInput | SortOrder
    idioma?: SortOrder
    resumen?: SortOrderInput | SortOrder
    autores?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
    historial_acceso?: historial_accesoOrderByRelationAggregateInput
    categoria?: categoriaOrderByWithRelationInput
    editorial?: editorialOrderByWithRelationInput
    unidadlibro?: unidadlibroOrderByRelationAggregateInput
  }

  export type libroWhereUniqueInput = Prisma.AtLeast<{
    id_libro?: number
    isbn?: string
    AND?: libroWhereInput | libroWhereInput[]
    OR?: libroWhereInput[]
    NOT?: libroWhereInput | libroWhereInput[]
    titulo?: StringFilter<"libro"> | string
    anio_publicacion?: IntNullableFilter<"libro"> | number | null
    idioma?: StringFilter<"libro"> | string
    resumen?: StringNullableFilter<"libro"> | string | null
    autores?: StringNullableListFilter<"libro">
    id_editorial?: IntFilter<"libro"> | number
    id_categoria?: IntFilter<"libro"> | number
    historial_acceso?: Historial_accesoListRelationFilter
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    editorial?: XOR<EditorialScalarRelationFilter, editorialWhereInput>
    unidadlibro?: UnidadlibroListRelationFilter
  }, "id_libro" | "isbn">

  export type libroOrderByWithAggregationInput = {
    id_libro?: SortOrder
    titulo?: SortOrder
    isbn?: SortOrder
    anio_publicacion?: SortOrderInput | SortOrder
    idioma?: SortOrder
    resumen?: SortOrderInput | SortOrder
    autores?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
    _count?: libroCountOrderByAggregateInput
    _avg?: libroAvgOrderByAggregateInput
    _max?: libroMaxOrderByAggregateInput
    _min?: libroMinOrderByAggregateInput
    _sum?: libroSumOrderByAggregateInput
  }

  export type libroScalarWhereWithAggregatesInput = {
    AND?: libroScalarWhereWithAggregatesInput | libroScalarWhereWithAggregatesInput[]
    OR?: libroScalarWhereWithAggregatesInput[]
    NOT?: libroScalarWhereWithAggregatesInput | libroScalarWhereWithAggregatesInput[]
    id_libro?: IntWithAggregatesFilter<"libro"> | number
    titulo?: StringWithAggregatesFilter<"libro"> | string
    isbn?: StringWithAggregatesFilter<"libro"> | string
    anio_publicacion?: IntNullableWithAggregatesFilter<"libro"> | number | null
    idioma?: StringWithAggregatesFilter<"libro"> | string
    resumen?: StringNullableWithAggregatesFilter<"libro"> | string | null
    autores?: StringNullableListFilter<"libro">
    id_editorial?: IntWithAggregatesFilter<"libro"> | number
    id_categoria?: IntWithAggregatesFilter<"libro"> | number
  }

  export type prestamoWhereInput = {
    AND?: prestamoWhereInput | prestamoWhereInput[]
    OR?: prestamoWhereInput[]
    NOT?: prestamoWhereInput | prestamoWhereInput[]
    id_prestamo?: IntFilter<"prestamo"> | number
    fecha_prestamo?: DateTimeFilter<"prestamo"> | Date | string
    fecha_entrega?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_usuario?: IntFilter<"prestamo"> | number
    estado_prestamo?: StringFilter<"prestamo"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    prestamo_unidadlibro?: Prestamo_unidadlibroListRelationFilter
  }

  export type prestamoOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_entrega?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    estado_prestamo?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    prestamo_unidadlibro?: prestamo_unidadlibroOrderByRelationAggregateInput
  }

  export type prestamoWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number
    AND?: prestamoWhereInput | prestamoWhereInput[]
    OR?: prestamoWhereInput[]
    NOT?: prestamoWhereInput | prestamoWhereInput[]
    fecha_prestamo?: DateTimeFilter<"prestamo"> | Date | string
    fecha_entrega?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_usuario?: IntFilter<"prestamo"> | number
    estado_prestamo?: StringFilter<"prestamo"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    prestamo_unidadlibro?: Prestamo_unidadlibroListRelationFilter
  }, "id_prestamo">

  export type prestamoOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_entrega?: SortOrderInput | SortOrder
    id_usuario?: SortOrder
    estado_prestamo?: SortOrder
    _count?: prestamoCountOrderByAggregateInput
    _avg?: prestamoAvgOrderByAggregateInput
    _max?: prestamoMaxOrderByAggregateInput
    _min?: prestamoMinOrderByAggregateInput
    _sum?: prestamoSumOrderByAggregateInput
  }

  export type prestamoScalarWhereWithAggregatesInput = {
    AND?: prestamoScalarWhereWithAggregatesInput | prestamoScalarWhereWithAggregatesInput[]
    OR?: prestamoScalarWhereWithAggregatesInput[]
    NOT?: prestamoScalarWhereWithAggregatesInput | prestamoScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"prestamo"> | number
    fecha_prestamo?: DateTimeWithAggregatesFilter<"prestamo"> | Date | string
    fecha_entrega?: DateTimeNullableWithAggregatesFilter<"prestamo"> | Date | string | null
    id_usuario?: IntWithAggregatesFilter<"prestamo"> | number
    estado_prestamo?: StringWithAggregatesFilter<"prestamo"> | string
  }

  export type prestamo_unidadlibroWhereInput = {
    AND?: prestamo_unidadlibroWhereInput | prestamo_unidadlibroWhereInput[]
    OR?: prestamo_unidadlibroWhereInput[]
    NOT?: prestamo_unidadlibroWhereInput | prestamo_unidadlibroWhereInput[]
    id_prestamo?: IntFilter<"prestamo_unidadlibro"> | number
    id_unidad?: IntFilter<"prestamo_unidadlibro"> | number
    prestamo?: XOR<PrestamoScalarRelationFilter, prestamoWhereInput>
    unidadlibro?: XOR<UnidadlibroScalarRelationFilter, unidadlibroWhereInput>
  }

  export type prestamo_unidadlibroOrderByWithRelationInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
    prestamo?: prestamoOrderByWithRelationInput
    unidadlibro?: unidadlibroOrderByWithRelationInput
  }

  export type prestamo_unidadlibroWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo_id_unidad?: prestamo_unidadlibroId_prestamoId_unidadCompoundUniqueInput
    AND?: prestamo_unidadlibroWhereInput | prestamo_unidadlibroWhereInput[]
    OR?: prestamo_unidadlibroWhereInput[]
    NOT?: prestamo_unidadlibroWhereInput | prestamo_unidadlibroWhereInput[]
    id_prestamo?: IntFilter<"prestamo_unidadlibro"> | number
    id_unidad?: IntFilter<"prestamo_unidadlibro"> | number
    prestamo?: XOR<PrestamoScalarRelationFilter, prestamoWhereInput>
    unidadlibro?: XOR<UnidadlibroScalarRelationFilter, unidadlibroWhereInput>
  }, "id_prestamo_id_unidad">

  export type prestamo_unidadlibroOrderByWithAggregationInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
    _count?: prestamo_unidadlibroCountOrderByAggregateInput
    _avg?: prestamo_unidadlibroAvgOrderByAggregateInput
    _max?: prestamo_unidadlibroMaxOrderByAggregateInput
    _min?: prestamo_unidadlibroMinOrderByAggregateInput
    _sum?: prestamo_unidadlibroSumOrderByAggregateInput
  }

  export type prestamo_unidadlibroScalarWhereWithAggregatesInput = {
    AND?: prestamo_unidadlibroScalarWhereWithAggregatesInput | prestamo_unidadlibroScalarWhereWithAggregatesInput[]
    OR?: prestamo_unidadlibroScalarWhereWithAggregatesInput[]
    NOT?: prestamo_unidadlibroScalarWhereWithAggregatesInput | prestamo_unidadlibroScalarWhereWithAggregatesInput[]
    id_prestamo?: IntWithAggregatesFilter<"prestamo_unidadlibro"> | number
    id_unidad?: IntWithAggregatesFilter<"prestamo_unidadlibro"> | number
  }

  export type reservaWhereInput = {
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    id_reserva?: IntFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
    id_usuario?: IntFilter<"reserva"> | number
    id_unidad?: IntFilter<"reserva"> | number
    unidadlibro?: XOR<UnidadlibroScalarRelationFilter, unidadlibroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type reservaOrderByWithRelationInput = {
    id_reserva?: SortOrder
    fecha_reserva?: SortOrderInput | SortOrder
    estado_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
    unidadlibro?: unidadlibroOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type reservaWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
    id_usuario?: IntFilter<"reserva"> | number
    id_unidad?: IntFilter<"reserva"> | number
    unidadlibro?: XOR<UnidadlibroScalarRelationFilter, unidadlibroWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_reserva">

  export type reservaOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    fecha_reserva?: SortOrderInput | SortOrder
    estado_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
    _count?: reservaCountOrderByAggregateInput
    _avg?: reservaAvgOrderByAggregateInput
    _max?: reservaMaxOrderByAggregateInput
    _min?: reservaMinOrderByAggregateInput
    _sum?: reservaSumOrderByAggregateInput
  }

  export type reservaScalarWhereWithAggregatesInput = {
    AND?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    OR?: reservaScalarWhereWithAggregatesInput[]
    NOT?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableWithAggregatesFilter<"reserva"> | Date | string | null
    estado_reserva?: StringWithAggregatesFilter<"reserva"> | string
    id_usuario?: IntWithAggregatesFilter<"reserva"> | number
    id_unidad?: IntWithAggregatesFilter<"reserva"> | number
  }

  export type unidadlibroWhereInput = {
    AND?: unidadlibroWhereInput | unidadlibroWhereInput[]
    OR?: unidadlibroWhereInput[]
    NOT?: unidadlibroWhereInput | unidadlibroWhereInput[]
    id_unidad?: IntFilter<"unidadlibro"> | number
    codigo_barra?: StringFilter<"unidadlibro"> | string
    id_libro?: IntFilter<"unidadlibro"> | number
    ubicacion_fisica?: StringFilter<"unidadlibro"> | string
    estado_fisico?: StringFilter<"unidadlibro"> | string
    prestamo_unidadlibro?: Prestamo_unidadlibroListRelationFilter
    reserva?: ReservaListRelationFilter
    libro?: XOR<LibroScalarRelationFilter, libroWhereInput>
  }

  export type unidadlibroOrderByWithRelationInput = {
    id_unidad?: SortOrder
    codigo_barra?: SortOrder
    id_libro?: SortOrder
    ubicacion_fisica?: SortOrder
    estado_fisico?: SortOrder
    prestamo_unidadlibro?: prestamo_unidadlibroOrderByRelationAggregateInput
    reserva?: reservaOrderByRelationAggregateInput
    libro?: libroOrderByWithRelationInput
  }

  export type unidadlibroWhereUniqueInput = Prisma.AtLeast<{
    id_unidad?: number
    codigo_barra?: string
    AND?: unidadlibroWhereInput | unidadlibroWhereInput[]
    OR?: unidadlibroWhereInput[]
    NOT?: unidadlibroWhereInput | unidadlibroWhereInput[]
    id_libro?: IntFilter<"unidadlibro"> | number
    ubicacion_fisica?: StringFilter<"unidadlibro"> | string
    estado_fisico?: StringFilter<"unidadlibro"> | string
    prestamo_unidadlibro?: Prestamo_unidadlibroListRelationFilter
    reserva?: ReservaListRelationFilter
    libro?: XOR<LibroScalarRelationFilter, libroWhereInput>
  }, "id_unidad" | "codigo_barra">

  export type unidadlibroOrderByWithAggregationInput = {
    id_unidad?: SortOrder
    codigo_barra?: SortOrder
    id_libro?: SortOrder
    ubicacion_fisica?: SortOrder
    estado_fisico?: SortOrder
    _count?: unidadlibroCountOrderByAggregateInput
    _avg?: unidadlibroAvgOrderByAggregateInput
    _max?: unidadlibroMaxOrderByAggregateInput
    _min?: unidadlibroMinOrderByAggregateInput
    _sum?: unidadlibroSumOrderByAggregateInput
  }

  export type unidadlibroScalarWhereWithAggregatesInput = {
    AND?: unidadlibroScalarWhereWithAggregatesInput | unidadlibroScalarWhereWithAggregatesInput[]
    OR?: unidadlibroScalarWhereWithAggregatesInput[]
    NOT?: unidadlibroScalarWhereWithAggregatesInput | unidadlibroScalarWhereWithAggregatesInput[]
    id_unidad?: IntWithAggregatesFilter<"unidadlibro"> | number
    codigo_barra?: StringWithAggregatesFilter<"unidadlibro"> | string
    id_libro?: IntWithAggregatesFilter<"unidadlibro"> | number
    ubicacion_fisica?: StringWithAggregatesFilter<"unidadlibro"> | string
    estado_fisico?: StringWithAggregatesFilter<"unidadlibro"> | string
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: IntFilter<"usuario"> | number
    nombre?: StringFilter<"usuario"> | string
    apellido?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    telefono?: StringFilter<"usuario"> | string
    direccion?: StringFilter<"usuario"> | string
    tipo_usuario?: StringFilter<"usuario"> | string
    historial_acceso?: Historial_accesoListRelationFilter
    prestamo?: PrestamoListRelationFilter
    reserva?: ReservaListRelationFilter
    usuario_categoria_interes?: Usuario_categoria_interesListRelationFilter
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    tipo_usuario?: SortOrder
    historial_acceso?: historial_accesoOrderByRelationAggregateInput
    prestamo?: prestamoOrderByRelationAggregateInput
    reserva?: reservaOrderByRelationAggregateInput
    usuario_categoria_interes?: usuario_categoria_interesOrderByRelationAggregateInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    email?: string
    telefono?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre?: StringFilter<"usuario"> | string
    apellido?: StringFilter<"usuario"> | string
    direccion?: StringFilter<"usuario"> | string
    tipo_usuario?: StringFilter<"usuario"> | string
    historial_acceso?: Historial_accesoListRelationFilter
    prestamo?: PrestamoListRelationFilter
    reserva?: ReservaListRelationFilter
    usuario_categoria_interes?: Usuario_categoria_interesListRelationFilter
  }, "id_usuario" | "email" | "telefono">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    tipo_usuario?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario"> | number
    nombre?: StringWithAggregatesFilter<"usuario"> | string
    apellido?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    telefono?: StringWithAggregatesFilter<"usuario"> | string
    direccion?: StringWithAggregatesFilter<"usuario"> | string
    tipo_usuario?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type usuario_categoria_interesWhereInput = {
    AND?: usuario_categoria_interesWhereInput | usuario_categoria_interesWhereInput[]
    OR?: usuario_categoria_interesWhereInput[]
    NOT?: usuario_categoria_interesWhereInput | usuario_categoria_interesWhereInput[]
    id_usuario?: IntFilter<"usuario_categoria_interes"> | number
    id_categoria?: IntFilter<"usuario_categoria_interes"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type usuario_categoria_interesOrderByWithRelationInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
    categoria?: categoriaOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type usuario_categoria_interesWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_id_categoria?: usuario_categoria_interesId_usuarioId_categoriaCompoundUniqueInput
    AND?: usuario_categoria_interesWhereInput | usuario_categoria_interesWhereInput[]
    OR?: usuario_categoria_interesWhereInput[]
    NOT?: usuario_categoria_interesWhereInput | usuario_categoria_interesWhereInput[]
    id_usuario?: IntFilter<"usuario_categoria_interes"> | number
    id_categoria?: IntFilter<"usuario_categoria_interes"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, categoriaWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id_usuario_id_categoria">

  export type usuario_categoria_interesOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
    _count?: usuario_categoria_interesCountOrderByAggregateInput
    _avg?: usuario_categoria_interesAvgOrderByAggregateInput
    _max?: usuario_categoria_interesMaxOrderByAggregateInput
    _min?: usuario_categoria_interesMinOrderByAggregateInput
    _sum?: usuario_categoria_interesSumOrderByAggregateInput
  }

  export type usuario_categoria_interesScalarWhereWithAggregatesInput = {
    AND?: usuario_categoria_interesScalarWhereWithAggregatesInput | usuario_categoria_interesScalarWhereWithAggregatesInput[]
    OR?: usuario_categoria_interesScalarWhereWithAggregatesInput[]
    NOT?: usuario_categoria_interesScalarWhereWithAggregatesInput | usuario_categoria_interesScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"usuario_categoria_interes"> | number
    id_categoria?: IntWithAggregatesFilter<"usuario_categoria_interes"> | number
  }

  export type categoriaCreateInput = {
    nombre_categoria: string
    descripcion?: string | null
    libro?: libroCreateNestedManyWithoutCategoriaInput
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
    libro?: libroUncheckedCreateNestedManyWithoutCategoriaInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUpdateInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUpdateManyWithoutCategoriaNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUncheckedUpdateManyWithoutCategoriaNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaCreateManyInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
  }

  export type categoriaUpdateManyMutationInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriaUncheckedUpdateManyInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type editorialCreateInput = {
    nombre: string
    pais: string
    anio_fundacion?: number | null
    libro?: libroCreateNestedManyWithoutEditorialInput
  }

  export type editorialUncheckedCreateInput = {
    id_editorial?: number
    nombre: string
    pais: string
    anio_fundacion?: number | null
    libro?: libroUncheckedCreateNestedManyWithoutEditorialInput
  }

  export type editorialUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
    libro?: libroUpdateManyWithoutEditorialNestedInput
  }

  export type editorialUncheckedUpdateInput = {
    id_editorial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
    libro?: libroUncheckedUpdateManyWithoutEditorialNestedInput
  }

  export type editorialCreateManyInput = {
    id_editorial?: number
    nombre: string
    pais: string
    anio_fundacion?: number | null
  }

  export type editorialUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type editorialUncheckedUpdateManyInput = {
    id_editorial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type historial_accesoCreateInput = {
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
    libro: libroCreateNestedOneWithoutHistorial_accesoInput
    usuario: usuarioCreateNestedOneWithoutHistorial_accesoInput
  }

  export type historial_accesoUncheckedCreateInput = {
    id_acceso?: number
    id_usuario: number
    id_libro: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type historial_accesoUpdateInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUpdateOneRequiredWithoutHistorial_accesoNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutHistorial_accesoNestedInput
  }

  export type historial_accesoUncheckedUpdateInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_libro?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_accesoCreateManyInput = {
    id_acceso?: number
    id_usuario: number
    id_libro: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type historial_accesoUpdateManyMutationInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_accesoUncheckedUpdateManyInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_libro?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type libroCreateInput = {
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    historial_acceso?: historial_accesoCreateNestedManyWithoutLibroInput
    categoria: categoriaCreateNestedOneWithoutLibroInput
    editorial: editorialCreateNestedOneWithoutLibroInput
    unidadlibro?: unidadlibroCreateNestedManyWithoutLibroInput
  }

  export type libroUncheckedCreateInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
    id_categoria: number
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutLibroInput
    unidadlibro?: unidadlibroUncheckedCreateNestedManyWithoutLibroInput
  }

  export type libroUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    historial_acceso?: historial_accesoUpdateManyWithoutLibroNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutLibroNestedInput
    editorial?: editorialUpdateOneRequiredWithoutLibroNestedInput
    unidadlibro?: unidadlibroUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutLibroNestedInput
    unidadlibro?: unidadlibroUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type libroCreateManyInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
    id_categoria: number
  }

  export type libroUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
  }

  export type libroUncheckedUpdateManyInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type prestamoCreateInput = {
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    estado_prestamo: string
    usuario: usuarioCreateNestedOneWithoutPrestamoInput
    prestamo_unidadlibro?: prestamo_unidadlibroCreateNestedManyWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateInput = {
    id_prestamo?: number
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    id_usuario: number
    estado_prestamo: string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type prestamoUpdateInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutPrestamoNestedInput
    prestamo_unidadlibro?: prestamo_unidadlibroUpdateManyWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    estado_prestamo?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type prestamoCreateManyInput = {
    id_prestamo?: number
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    id_usuario: number
    estado_prestamo: string
  }

  export type prestamoUpdateManyMutationInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
  }

  export type prestamoUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    estado_prestamo?: StringFieldUpdateOperationsInput | string
  }

  export type prestamo_unidadlibroCreateInput = {
    prestamo: prestamoCreateNestedOneWithoutPrestamo_unidadlibroInput
    unidadlibro: unidadlibroCreateNestedOneWithoutPrestamo_unidadlibroInput
  }

  export type prestamo_unidadlibroUncheckedCreateInput = {
    id_prestamo: number
    id_unidad: number
  }

  export type prestamo_unidadlibroUpdateInput = {
    prestamo?: prestamoUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput
    unidadlibro?: unidadlibroUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput
  }

  export type prestamo_unidadlibroUncheckedUpdateInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type prestamo_unidadlibroCreateManyInput = {
    id_prestamo: number
    id_unidad: number
  }

  export type prestamo_unidadlibroUpdateManyMutationInput = {

  }

  export type prestamo_unidadlibroUncheckedUpdateManyInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type reservaCreateInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    unidadlibro: unidadlibroCreateNestedOneWithoutReservaInput
    usuario: usuarioCreateNestedOneWithoutReservaInput
  }

  export type reservaUncheckedCreateInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_usuario: number
    id_unidad: number
  }

  export type reservaUpdateInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    unidadlibro?: unidadlibroUpdateOneRequiredWithoutReservaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type reservaCreateManyInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_usuario: number
    id_unidad: number
  }

  export type reservaUpdateManyMutationInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
  }

  export type reservaUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type unidadlibroCreateInput = {
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroCreateNestedManyWithoutUnidadlibroInput
    reserva?: reservaCreateNestedManyWithoutUnidadlibroInput
    libro: libroCreateNestedOneWithoutUnidadlibroInput
  }

  export type unidadlibroUncheckedCreateInput = {
    id_unidad?: number
    codigo_barra: string
    id_libro: number
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedCreateNestedManyWithoutUnidadlibroInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUnidadlibroInput
  }

  export type unidadlibroUpdateInput = {
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUpdateManyWithoutUnidadlibroNestedInput
    reserva?: reservaUpdateManyWithoutUnidadlibroNestedInput
    libro?: libroUpdateOneRequiredWithoutUnidadlibroNestedInput
  }

  export type unidadlibroUncheckedUpdateInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    id_libro?: IntFieldUpdateOperationsInput | number
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUnidadlibroNestedInput
  }

  export type unidadlibroCreateManyInput = {
    id_unidad?: number
    codigo_barra: string
    id_libro: number
    ubicacion_fisica: string
    estado_fisico: string
  }

  export type unidadlibroUpdateManyMutationInput = {
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type unidadlibroUncheckedUpdateManyInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    id_libro?: IntFieldUpdateOperationsInput | number
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoCreateNestedManyWithoutUsuarioInput
    reserva?: reservaCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoUncheckedCreateNestedManyWithoutUsuarioInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUncheckedUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
  }

  export type usuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
  }

  export type usuario_categoria_interesCreateInput = {
    categoria: categoriaCreateNestedOneWithoutUsuario_categoria_interesInput
    usuario: usuarioCreateNestedOneWithoutUsuario_categoria_interesInput
  }

  export type usuario_categoria_interesUncheckedCreateInput = {
    id_usuario: number
    id_categoria: number
  }

  export type usuario_categoria_interesUpdateInput = {
    categoria?: categoriaUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput
  }

  export type usuario_categoria_interesUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_categoria_interesCreateManyInput = {
    id_usuario: number
    id_categoria: number
  }

  export type usuario_categoria_interesUpdateManyMutationInput = {

  }

  export type usuario_categoria_interesUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LibroListRelationFilter = {
    every?: libroWhereInput
    some?: libroWhereInput
    none?: libroWhereInput
  }

  export type Usuario_categoria_interesListRelationFilter = {
    every?: usuario_categoria_interesWhereInput
    some?: usuario_categoria_interesWhereInput
    none?: usuario_categoria_interesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type libroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuario_categoria_interesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriaCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriaMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre_categoria?: SortOrder
    descripcion?: SortOrder
  }

  export type categoriaSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type editorialCountOrderByAggregateInput = {
    id_editorial?: SortOrder
    nombre?: SortOrder
    pais?: SortOrder
    anio_fundacion?: SortOrder
  }

  export type editorialAvgOrderByAggregateInput = {
    id_editorial?: SortOrder
    anio_fundacion?: SortOrder
  }

  export type editorialMaxOrderByAggregateInput = {
    id_editorial?: SortOrder
    nombre?: SortOrder
    pais?: SortOrder
    anio_fundacion?: SortOrder
  }

  export type editorialMinOrderByAggregateInput = {
    id_editorial?: SortOrder
    nombre?: SortOrder
    pais?: SortOrder
    anio_fundacion?: SortOrder
  }

  export type editorialSumOrderByAggregateInput = {
    id_editorial?: SortOrder
    anio_fundacion?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LibroScalarRelationFilter = {
    is?: libroWhereInput
    isNot?: libroWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type historial_accesoCountOrderByAggregateInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
    fecha_consulta?: SortOrder
    tipo_acceso?: SortOrder
  }

  export type historial_accesoAvgOrderByAggregateInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
  }

  export type historial_accesoMaxOrderByAggregateInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
    fecha_consulta?: SortOrder
    tipo_acceso?: SortOrder
  }

  export type historial_accesoMinOrderByAggregateInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
    fecha_consulta?: SortOrder
    tipo_acceso?: SortOrder
  }

  export type historial_accesoSumOrderByAggregateInput = {
    id_acceso?: SortOrder
    id_usuario?: SortOrder
    id_libro?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Historial_accesoListRelationFilter = {
    every?: historial_accesoWhereInput
    some?: historial_accesoWhereInput
    none?: historial_accesoWhereInput
  }

  export type CategoriaScalarRelationFilter = {
    is?: categoriaWhereInput
    isNot?: categoriaWhereInput
  }

  export type EditorialScalarRelationFilter = {
    is?: editorialWhereInput
    isNot?: editorialWhereInput
  }

  export type UnidadlibroListRelationFilter = {
    every?: unidadlibroWhereInput
    some?: unidadlibroWhereInput
    none?: unidadlibroWhereInput
  }

  export type historial_accesoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unidadlibroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type libroCountOrderByAggregateInput = {
    id_libro?: SortOrder
    titulo?: SortOrder
    isbn?: SortOrder
    anio_publicacion?: SortOrder
    idioma?: SortOrder
    resumen?: SortOrder
    autores?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
  }

  export type libroAvgOrderByAggregateInput = {
    id_libro?: SortOrder
    anio_publicacion?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
  }

  export type libroMaxOrderByAggregateInput = {
    id_libro?: SortOrder
    titulo?: SortOrder
    isbn?: SortOrder
    anio_publicacion?: SortOrder
    idioma?: SortOrder
    resumen?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
  }

  export type libroMinOrderByAggregateInput = {
    id_libro?: SortOrder
    titulo?: SortOrder
    isbn?: SortOrder
    anio_publicacion?: SortOrder
    idioma?: SortOrder
    resumen?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
  }

  export type libroSumOrderByAggregateInput = {
    id_libro?: SortOrder
    anio_publicacion?: SortOrder
    id_editorial?: SortOrder
    id_categoria?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Prestamo_unidadlibroListRelationFilter = {
    every?: prestamo_unidadlibroWhereInput
    some?: prestamo_unidadlibroWhereInput
    none?: prestamo_unidadlibroWhereInput
  }

  export type prestamo_unidadlibroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type prestamoCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_entrega?: SortOrder
    id_usuario?: SortOrder
    estado_prestamo?: SortOrder
  }

  export type prestamoAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type prestamoMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_entrega?: SortOrder
    id_usuario?: SortOrder
    estado_prestamo?: SortOrder
  }

  export type prestamoMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    fecha_prestamo?: SortOrder
    fecha_entrega?: SortOrder
    id_usuario?: SortOrder
    estado_prestamo?: SortOrder
  }

  export type prestamoSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_usuario?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PrestamoScalarRelationFilter = {
    is?: prestamoWhereInput
    isNot?: prestamoWhereInput
  }

  export type UnidadlibroScalarRelationFilter = {
    is?: unidadlibroWhereInput
    isNot?: unidadlibroWhereInput
  }

  export type prestamo_unidadlibroId_prestamoId_unidadCompoundUniqueInput = {
    id_prestamo: number
    id_unidad: number
  }

  export type prestamo_unidadlibroCountOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
  }

  export type prestamo_unidadlibroAvgOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
  }

  export type prestamo_unidadlibroMaxOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
  }

  export type prestamo_unidadlibroMinOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
  }

  export type prestamo_unidadlibroSumOrderByAggregateInput = {
    id_prestamo?: SortOrder
    id_unidad?: SortOrder
  }

  export type reservaCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
  }

  export type reservaAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
  }

  export type reservaMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
  }

  export type reservaMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
  }

  export type reservaSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_unidad?: SortOrder
  }

  export type ReservaListRelationFilter = {
    every?: reservaWhereInput
    some?: reservaWhereInput
    none?: reservaWhereInput
  }

  export type reservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type unidadlibroCountOrderByAggregateInput = {
    id_unidad?: SortOrder
    codigo_barra?: SortOrder
    id_libro?: SortOrder
    ubicacion_fisica?: SortOrder
    estado_fisico?: SortOrder
  }

  export type unidadlibroAvgOrderByAggregateInput = {
    id_unidad?: SortOrder
    id_libro?: SortOrder
  }

  export type unidadlibroMaxOrderByAggregateInput = {
    id_unidad?: SortOrder
    codigo_barra?: SortOrder
    id_libro?: SortOrder
    ubicacion_fisica?: SortOrder
    estado_fisico?: SortOrder
  }

  export type unidadlibroMinOrderByAggregateInput = {
    id_unidad?: SortOrder
    codigo_barra?: SortOrder
    id_libro?: SortOrder
    ubicacion_fisica?: SortOrder
    estado_fisico?: SortOrder
  }

  export type unidadlibroSumOrderByAggregateInput = {
    id_unidad?: SortOrder
    id_libro?: SortOrder
  }

  export type PrestamoListRelationFilter = {
    every?: prestamoWhereInput
    some?: prestamoWhereInput
    none?: prestamoWhereInput
  }

  export type prestamoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    tipo_usuario?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuario_categoria_interesId_usuarioId_categoriaCompoundUniqueInput = {
    id_usuario: number
    id_categoria: number
  }

  export type usuario_categoria_interesCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type usuario_categoria_interesAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type usuario_categoria_interesMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type usuario_categoria_interesMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type usuario_categoria_interesSumOrderByAggregateInput = {
    id_usuario?: SortOrder
    id_categoria?: SortOrder
  }

  export type libroCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput> | libroCreateWithoutCategoriaInput[] | libroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: libroCreateOrConnectWithoutCategoriaInput | libroCreateOrConnectWithoutCategoriaInput[]
    createMany?: libroCreateManyCategoriaInputEnvelope
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type usuario_categoria_interesCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput> | usuario_categoria_interesCreateWithoutCategoriaInput[] | usuario_categoria_interesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutCategoriaInput | usuario_categoria_interesCreateOrConnectWithoutCategoriaInput[]
    createMany?: usuario_categoria_interesCreateManyCategoriaInputEnvelope
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
  }

  export type libroUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput> | libroCreateWithoutCategoriaInput[] | libroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: libroCreateOrConnectWithoutCategoriaInput | libroCreateOrConnectWithoutCategoriaInput[]
    createMany?: libroCreateManyCategoriaInputEnvelope
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type usuario_categoria_interesUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput> | usuario_categoria_interesCreateWithoutCategoriaInput[] | usuario_categoria_interesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutCategoriaInput | usuario_categoria_interesCreateOrConnectWithoutCategoriaInput[]
    createMany?: usuario_categoria_interesCreateManyCategoriaInputEnvelope
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type libroUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput> | libroCreateWithoutCategoriaInput[] | libroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: libroCreateOrConnectWithoutCategoriaInput | libroCreateOrConnectWithoutCategoriaInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutCategoriaInput | libroUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: libroCreateManyCategoriaInputEnvelope
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutCategoriaInput | libroUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: libroUpdateManyWithWhereWithoutCategoriaInput | libroUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type usuario_categoria_interesUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput> | usuario_categoria_interesCreateWithoutCategoriaInput[] | usuario_categoria_interesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutCategoriaInput | usuario_categoria_interesCreateOrConnectWithoutCategoriaInput[]
    upsert?: usuario_categoria_interesUpsertWithWhereUniqueWithoutCategoriaInput | usuario_categoria_interesUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: usuario_categoria_interesCreateManyCategoriaInputEnvelope
    set?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    disconnect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    delete?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    update?: usuario_categoria_interesUpdateWithWhereUniqueWithoutCategoriaInput | usuario_categoria_interesUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: usuario_categoria_interesUpdateManyWithWhereWithoutCategoriaInput | usuario_categoria_interesUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type libroUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput> | libroCreateWithoutCategoriaInput[] | libroUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: libroCreateOrConnectWithoutCategoriaInput | libroCreateOrConnectWithoutCategoriaInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutCategoriaInput | libroUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: libroCreateManyCategoriaInputEnvelope
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutCategoriaInput | libroUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: libroUpdateManyWithWhereWithoutCategoriaInput | libroUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type usuario_categoria_interesUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput> | usuario_categoria_interesCreateWithoutCategoriaInput[] | usuario_categoria_interesUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutCategoriaInput | usuario_categoria_interesCreateOrConnectWithoutCategoriaInput[]
    upsert?: usuario_categoria_interesUpsertWithWhereUniqueWithoutCategoriaInput | usuario_categoria_interesUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: usuario_categoria_interesCreateManyCategoriaInputEnvelope
    set?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    disconnect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    delete?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    update?: usuario_categoria_interesUpdateWithWhereUniqueWithoutCategoriaInput | usuario_categoria_interesUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: usuario_categoria_interesUpdateManyWithWhereWithoutCategoriaInput | usuario_categoria_interesUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
  }

  export type libroCreateNestedManyWithoutEditorialInput = {
    create?: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput> | libroCreateWithoutEditorialInput[] | libroUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: libroCreateOrConnectWithoutEditorialInput | libroCreateOrConnectWithoutEditorialInput[]
    createMany?: libroCreateManyEditorialInputEnvelope
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type libroUncheckedCreateNestedManyWithoutEditorialInput = {
    create?: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput> | libroCreateWithoutEditorialInput[] | libroUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: libroCreateOrConnectWithoutEditorialInput | libroCreateOrConnectWithoutEditorialInput[]
    createMany?: libroCreateManyEditorialInputEnvelope
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type libroUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput> | libroCreateWithoutEditorialInput[] | libroUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: libroCreateOrConnectWithoutEditorialInput | libroCreateOrConnectWithoutEditorialInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutEditorialInput | libroUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: libroCreateManyEditorialInputEnvelope
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutEditorialInput | libroUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: libroUpdateManyWithWhereWithoutEditorialInput | libroUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type libroUncheckedUpdateManyWithoutEditorialNestedInput = {
    create?: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput> | libroCreateWithoutEditorialInput[] | libroUncheckedCreateWithoutEditorialInput[]
    connectOrCreate?: libroCreateOrConnectWithoutEditorialInput | libroCreateOrConnectWithoutEditorialInput[]
    upsert?: libroUpsertWithWhereUniqueWithoutEditorialInput | libroUpsertWithWhereUniqueWithoutEditorialInput[]
    createMany?: libroCreateManyEditorialInputEnvelope
    set?: libroWhereUniqueInput | libroWhereUniqueInput[]
    disconnect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    delete?: libroWhereUniqueInput | libroWhereUniqueInput[]
    connect?: libroWhereUniqueInput | libroWhereUniqueInput[]
    update?: libroUpdateWithWhereUniqueWithoutEditorialInput | libroUpdateWithWhereUniqueWithoutEditorialInput[]
    updateMany?: libroUpdateManyWithWhereWithoutEditorialInput | libroUpdateManyWithWhereWithoutEditorialInput[]
    deleteMany?: libroScalarWhereInput | libroScalarWhereInput[]
  }

  export type libroCreateNestedOneWithoutHistorial_accesoInput = {
    create?: XOR<libroCreateWithoutHistorial_accesoInput, libroUncheckedCreateWithoutHistorial_accesoInput>
    connectOrCreate?: libroCreateOrConnectWithoutHistorial_accesoInput
    connect?: libroWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutHistorial_accesoInput = {
    create?: XOR<usuarioCreateWithoutHistorial_accesoInput, usuarioUncheckedCreateWithoutHistorial_accesoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutHistorial_accesoInput
    connect?: usuarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type libroUpdateOneRequiredWithoutHistorial_accesoNestedInput = {
    create?: XOR<libroCreateWithoutHistorial_accesoInput, libroUncheckedCreateWithoutHistorial_accesoInput>
    connectOrCreate?: libroCreateOrConnectWithoutHistorial_accesoInput
    upsert?: libroUpsertWithoutHistorial_accesoInput
    connect?: libroWhereUniqueInput
    update?: XOR<XOR<libroUpdateToOneWithWhereWithoutHistorial_accesoInput, libroUpdateWithoutHistorial_accesoInput>, libroUncheckedUpdateWithoutHistorial_accesoInput>
  }

  export type usuarioUpdateOneRequiredWithoutHistorial_accesoNestedInput = {
    create?: XOR<usuarioCreateWithoutHistorial_accesoInput, usuarioUncheckedCreateWithoutHistorial_accesoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutHistorial_accesoInput
    upsert?: usuarioUpsertWithoutHistorial_accesoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutHistorial_accesoInput, usuarioUpdateWithoutHistorial_accesoInput>, usuarioUncheckedUpdateWithoutHistorial_accesoInput>
  }

  export type libroCreateautoresInput = {
    set: string[]
  }

  export type historial_accesoCreateNestedManyWithoutLibroInput = {
    create?: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput> | historial_accesoCreateWithoutLibroInput[] | historial_accesoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutLibroInput | historial_accesoCreateOrConnectWithoutLibroInput[]
    createMany?: historial_accesoCreateManyLibroInputEnvelope
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
  }

  export type categoriaCreateNestedOneWithoutLibroInput = {
    create?: XOR<categoriaCreateWithoutLibroInput, categoriaUncheckedCreateWithoutLibroInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutLibroInput
    connect?: categoriaWhereUniqueInput
  }

  export type editorialCreateNestedOneWithoutLibroInput = {
    create?: XOR<editorialCreateWithoutLibroInput, editorialUncheckedCreateWithoutLibroInput>
    connectOrCreate?: editorialCreateOrConnectWithoutLibroInput
    connect?: editorialWhereUniqueInput
  }

  export type unidadlibroCreateNestedManyWithoutLibroInput = {
    create?: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput> | unidadlibroCreateWithoutLibroInput[] | unidadlibroUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: unidadlibroCreateOrConnectWithoutLibroInput | unidadlibroCreateOrConnectWithoutLibroInput[]
    createMany?: unidadlibroCreateManyLibroInputEnvelope
    connect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
  }

  export type historial_accesoUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput> | historial_accesoCreateWithoutLibroInput[] | historial_accesoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutLibroInput | historial_accesoCreateOrConnectWithoutLibroInput[]
    createMany?: historial_accesoCreateManyLibroInputEnvelope
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
  }

  export type unidadlibroUncheckedCreateNestedManyWithoutLibroInput = {
    create?: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput> | unidadlibroCreateWithoutLibroInput[] | unidadlibroUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: unidadlibroCreateOrConnectWithoutLibroInput | unidadlibroCreateOrConnectWithoutLibroInput[]
    createMany?: unidadlibroCreateManyLibroInputEnvelope
    connect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
  }

  export type libroUpdateautoresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type historial_accesoUpdateManyWithoutLibroNestedInput = {
    create?: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput> | historial_accesoCreateWithoutLibroInput[] | historial_accesoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutLibroInput | historial_accesoCreateOrConnectWithoutLibroInput[]
    upsert?: historial_accesoUpsertWithWhereUniqueWithoutLibroInput | historial_accesoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: historial_accesoCreateManyLibroInputEnvelope
    set?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    disconnect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    delete?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    update?: historial_accesoUpdateWithWhereUniqueWithoutLibroInput | historial_accesoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: historial_accesoUpdateManyWithWhereWithoutLibroInput | historial_accesoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
  }

  export type categoriaUpdateOneRequiredWithoutLibroNestedInput = {
    create?: XOR<categoriaCreateWithoutLibroInput, categoriaUncheckedCreateWithoutLibroInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutLibroInput
    upsert?: categoriaUpsertWithoutLibroInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutLibroInput, categoriaUpdateWithoutLibroInput>, categoriaUncheckedUpdateWithoutLibroInput>
  }

  export type editorialUpdateOneRequiredWithoutLibroNestedInput = {
    create?: XOR<editorialCreateWithoutLibroInput, editorialUncheckedCreateWithoutLibroInput>
    connectOrCreate?: editorialCreateOrConnectWithoutLibroInput
    upsert?: editorialUpsertWithoutLibroInput
    connect?: editorialWhereUniqueInput
    update?: XOR<XOR<editorialUpdateToOneWithWhereWithoutLibroInput, editorialUpdateWithoutLibroInput>, editorialUncheckedUpdateWithoutLibroInput>
  }

  export type unidadlibroUpdateManyWithoutLibroNestedInput = {
    create?: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput> | unidadlibroCreateWithoutLibroInput[] | unidadlibroUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: unidadlibroCreateOrConnectWithoutLibroInput | unidadlibroCreateOrConnectWithoutLibroInput[]
    upsert?: unidadlibroUpsertWithWhereUniqueWithoutLibroInput | unidadlibroUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: unidadlibroCreateManyLibroInputEnvelope
    set?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    disconnect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    delete?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    connect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    update?: unidadlibroUpdateWithWhereUniqueWithoutLibroInput | unidadlibroUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: unidadlibroUpdateManyWithWhereWithoutLibroInput | unidadlibroUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: unidadlibroScalarWhereInput | unidadlibroScalarWhereInput[]
  }

  export type historial_accesoUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput> | historial_accesoCreateWithoutLibroInput[] | historial_accesoUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutLibroInput | historial_accesoCreateOrConnectWithoutLibroInput[]
    upsert?: historial_accesoUpsertWithWhereUniqueWithoutLibroInput | historial_accesoUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: historial_accesoCreateManyLibroInputEnvelope
    set?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    disconnect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    delete?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    update?: historial_accesoUpdateWithWhereUniqueWithoutLibroInput | historial_accesoUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: historial_accesoUpdateManyWithWhereWithoutLibroInput | historial_accesoUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
  }

  export type unidadlibroUncheckedUpdateManyWithoutLibroNestedInput = {
    create?: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput> | unidadlibroCreateWithoutLibroInput[] | unidadlibroUncheckedCreateWithoutLibroInput[]
    connectOrCreate?: unidadlibroCreateOrConnectWithoutLibroInput | unidadlibroCreateOrConnectWithoutLibroInput[]
    upsert?: unidadlibroUpsertWithWhereUniqueWithoutLibroInput | unidadlibroUpsertWithWhereUniqueWithoutLibroInput[]
    createMany?: unidadlibroCreateManyLibroInputEnvelope
    set?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    disconnect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    delete?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    connect?: unidadlibroWhereUniqueInput | unidadlibroWhereUniqueInput[]
    update?: unidadlibroUpdateWithWhereUniqueWithoutLibroInput | unidadlibroUpdateWithWhereUniqueWithoutLibroInput[]
    updateMany?: unidadlibroUpdateManyWithWhereWithoutLibroInput | unidadlibroUpdateManyWithWhereWithoutLibroInput[]
    deleteMany?: unidadlibroScalarWhereInput | unidadlibroScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutPrestamoInput = {
    create?: XOR<usuarioCreateWithoutPrestamoInput, usuarioUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPrestamoInput
    connect?: usuarioWhereUniqueInput
  }

  export type prestamo_unidadlibroCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput> | prestamo_unidadlibroCreateWithoutPrestamoInput[] | prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput | prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput[]
    createMany?: prestamo_unidadlibroCreateManyPrestamoInputEnvelope
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
  }

  export type prestamo_unidadlibroUncheckedCreateNestedManyWithoutPrestamoInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput> | prestamo_unidadlibroCreateWithoutPrestamoInput[] | prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput | prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput[]
    createMany?: prestamo_unidadlibroCreateManyPrestamoInputEnvelope
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutPrestamoNestedInput = {
    create?: XOR<usuarioCreateWithoutPrestamoInput, usuarioUncheckedCreateWithoutPrestamoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPrestamoInput
    upsert?: usuarioUpsertWithoutPrestamoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPrestamoInput, usuarioUpdateWithoutPrestamoInput>, usuarioUncheckedUpdateWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput> | prestamo_unidadlibroCreateWithoutPrestamoInput[] | prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput | prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput[]
    upsert?: prestamo_unidadlibroUpsertWithWhereUniqueWithoutPrestamoInput | prestamo_unidadlibroUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: prestamo_unidadlibroCreateManyPrestamoInputEnvelope
    set?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    disconnect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    delete?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    update?: prestamo_unidadlibroUpdateWithWhereUniqueWithoutPrestamoInput | prestamo_unidadlibroUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: prestamo_unidadlibroUpdateManyWithWhereWithoutPrestamoInput | prestamo_unidadlibroUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
  }

  export type prestamo_unidadlibroUncheckedUpdateManyWithoutPrestamoNestedInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput> | prestamo_unidadlibroCreateWithoutPrestamoInput[] | prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput | prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput[]
    upsert?: prestamo_unidadlibroUpsertWithWhereUniqueWithoutPrestamoInput | prestamo_unidadlibroUpsertWithWhereUniqueWithoutPrestamoInput[]
    createMany?: prestamo_unidadlibroCreateManyPrestamoInputEnvelope
    set?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    disconnect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    delete?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    update?: prestamo_unidadlibroUpdateWithWhereUniqueWithoutPrestamoInput | prestamo_unidadlibroUpdateWithWhereUniqueWithoutPrestamoInput[]
    updateMany?: prestamo_unidadlibroUpdateManyWithWhereWithoutPrestamoInput | prestamo_unidadlibroUpdateManyWithWhereWithoutPrestamoInput[]
    deleteMany?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
  }

  export type prestamoCreateNestedOneWithoutPrestamo_unidadlibroInput = {
    create?: XOR<prestamoCreateWithoutPrestamo_unidadlibroInput, prestamoUncheckedCreateWithoutPrestamo_unidadlibroInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutPrestamo_unidadlibroInput
    connect?: prestamoWhereUniqueInput
  }

  export type unidadlibroCreateNestedOneWithoutPrestamo_unidadlibroInput = {
    create?: XOR<unidadlibroCreateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedCreateWithoutPrestamo_unidadlibroInput>
    connectOrCreate?: unidadlibroCreateOrConnectWithoutPrestamo_unidadlibroInput
    connect?: unidadlibroWhereUniqueInput
  }

  export type prestamoUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput = {
    create?: XOR<prestamoCreateWithoutPrestamo_unidadlibroInput, prestamoUncheckedCreateWithoutPrestamo_unidadlibroInput>
    connectOrCreate?: prestamoCreateOrConnectWithoutPrestamo_unidadlibroInput
    upsert?: prestamoUpsertWithoutPrestamo_unidadlibroInput
    connect?: prestamoWhereUniqueInput
    update?: XOR<XOR<prestamoUpdateToOneWithWhereWithoutPrestamo_unidadlibroInput, prestamoUpdateWithoutPrestamo_unidadlibroInput>, prestamoUncheckedUpdateWithoutPrestamo_unidadlibroInput>
  }

  export type unidadlibroUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput = {
    create?: XOR<unidadlibroCreateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedCreateWithoutPrestamo_unidadlibroInput>
    connectOrCreate?: unidadlibroCreateOrConnectWithoutPrestamo_unidadlibroInput
    upsert?: unidadlibroUpsertWithoutPrestamo_unidadlibroInput
    connect?: unidadlibroWhereUniqueInput
    update?: XOR<XOR<unidadlibroUpdateToOneWithWhereWithoutPrestamo_unidadlibroInput, unidadlibroUpdateWithoutPrestamo_unidadlibroInput>, unidadlibroUncheckedUpdateWithoutPrestamo_unidadlibroInput>
  }

  export type unidadlibroCreateNestedOneWithoutReservaInput = {
    create?: XOR<unidadlibroCreateWithoutReservaInput, unidadlibroUncheckedCreateWithoutReservaInput>
    connectOrCreate?: unidadlibroCreateOrConnectWithoutReservaInput
    connect?: unidadlibroWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutReservaInput = {
    create?: XOR<usuarioCreateWithoutReservaInput, usuarioUncheckedCreateWithoutReservaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutReservaInput
    connect?: usuarioWhereUniqueInput
  }

  export type unidadlibroUpdateOneRequiredWithoutReservaNestedInput = {
    create?: XOR<unidadlibroCreateWithoutReservaInput, unidadlibroUncheckedCreateWithoutReservaInput>
    connectOrCreate?: unidadlibroCreateOrConnectWithoutReservaInput
    upsert?: unidadlibroUpsertWithoutReservaInput
    connect?: unidadlibroWhereUniqueInput
    update?: XOR<XOR<unidadlibroUpdateToOneWithWhereWithoutReservaInput, unidadlibroUpdateWithoutReservaInput>, unidadlibroUncheckedUpdateWithoutReservaInput>
  }

  export type usuarioUpdateOneRequiredWithoutReservaNestedInput = {
    create?: XOR<usuarioCreateWithoutReservaInput, usuarioUncheckedCreateWithoutReservaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutReservaInput
    upsert?: usuarioUpsertWithoutReservaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutReservaInput, usuarioUpdateWithoutReservaInput>, usuarioUncheckedUpdateWithoutReservaInput>
  }

  export type prestamo_unidadlibroCreateNestedManyWithoutUnidadlibroInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput> | prestamo_unidadlibroCreateWithoutUnidadlibroInput[] | prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput | prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput[]
    createMany?: prestamo_unidadlibroCreateManyUnidadlibroInputEnvelope
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
  }

  export type reservaCreateNestedManyWithoutUnidadlibroInput = {
    create?: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput> | reservaCreateWithoutUnidadlibroInput[] | reservaUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUnidadlibroInput | reservaCreateOrConnectWithoutUnidadlibroInput[]
    createMany?: reservaCreateManyUnidadlibroInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type libroCreateNestedOneWithoutUnidadlibroInput = {
    create?: XOR<libroCreateWithoutUnidadlibroInput, libroUncheckedCreateWithoutUnidadlibroInput>
    connectOrCreate?: libroCreateOrConnectWithoutUnidadlibroInput
    connect?: libroWhereUniqueInput
  }

  export type prestamo_unidadlibroUncheckedCreateNestedManyWithoutUnidadlibroInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput> | prestamo_unidadlibroCreateWithoutUnidadlibroInput[] | prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput | prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput[]
    createMany?: prestamo_unidadlibroCreateManyUnidadlibroInputEnvelope
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
  }

  export type reservaUncheckedCreateNestedManyWithoutUnidadlibroInput = {
    create?: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput> | reservaCreateWithoutUnidadlibroInput[] | reservaUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUnidadlibroInput | reservaCreateOrConnectWithoutUnidadlibroInput[]
    createMany?: reservaCreateManyUnidadlibroInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type prestamo_unidadlibroUpdateManyWithoutUnidadlibroNestedInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput> | prestamo_unidadlibroCreateWithoutUnidadlibroInput[] | prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput | prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput[]
    upsert?: prestamo_unidadlibroUpsertWithWhereUniqueWithoutUnidadlibroInput | prestamo_unidadlibroUpsertWithWhereUniqueWithoutUnidadlibroInput[]
    createMany?: prestamo_unidadlibroCreateManyUnidadlibroInputEnvelope
    set?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    disconnect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    delete?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    update?: prestamo_unidadlibroUpdateWithWhereUniqueWithoutUnidadlibroInput | prestamo_unidadlibroUpdateWithWhereUniqueWithoutUnidadlibroInput[]
    updateMany?: prestamo_unidadlibroUpdateManyWithWhereWithoutUnidadlibroInput | prestamo_unidadlibroUpdateManyWithWhereWithoutUnidadlibroInput[]
    deleteMany?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
  }

  export type reservaUpdateManyWithoutUnidadlibroNestedInput = {
    create?: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput> | reservaCreateWithoutUnidadlibroInput[] | reservaUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUnidadlibroInput | reservaCreateOrConnectWithoutUnidadlibroInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUnidadlibroInput | reservaUpsertWithWhereUniqueWithoutUnidadlibroInput[]
    createMany?: reservaCreateManyUnidadlibroInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUnidadlibroInput | reservaUpdateWithWhereUniqueWithoutUnidadlibroInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUnidadlibroInput | reservaUpdateManyWithWhereWithoutUnidadlibroInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type libroUpdateOneRequiredWithoutUnidadlibroNestedInput = {
    create?: XOR<libroCreateWithoutUnidadlibroInput, libroUncheckedCreateWithoutUnidadlibroInput>
    connectOrCreate?: libroCreateOrConnectWithoutUnidadlibroInput
    upsert?: libroUpsertWithoutUnidadlibroInput
    connect?: libroWhereUniqueInput
    update?: XOR<XOR<libroUpdateToOneWithWhereWithoutUnidadlibroInput, libroUpdateWithoutUnidadlibroInput>, libroUncheckedUpdateWithoutUnidadlibroInput>
  }

  export type prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroNestedInput = {
    create?: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput> | prestamo_unidadlibroCreateWithoutUnidadlibroInput[] | prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput | prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput[]
    upsert?: prestamo_unidadlibroUpsertWithWhereUniqueWithoutUnidadlibroInput | prestamo_unidadlibroUpsertWithWhereUniqueWithoutUnidadlibroInput[]
    createMany?: prestamo_unidadlibroCreateManyUnidadlibroInputEnvelope
    set?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    disconnect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    delete?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    connect?: prestamo_unidadlibroWhereUniqueInput | prestamo_unidadlibroWhereUniqueInput[]
    update?: prestamo_unidadlibroUpdateWithWhereUniqueWithoutUnidadlibroInput | prestamo_unidadlibroUpdateWithWhereUniqueWithoutUnidadlibroInput[]
    updateMany?: prestamo_unidadlibroUpdateManyWithWhereWithoutUnidadlibroInput | prestamo_unidadlibroUpdateManyWithWhereWithoutUnidadlibroInput[]
    deleteMany?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
  }

  export type reservaUncheckedUpdateManyWithoutUnidadlibroNestedInput = {
    create?: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput> | reservaCreateWithoutUnidadlibroInput[] | reservaUncheckedCreateWithoutUnidadlibroInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUnidadlibroInput | reservaCreateOrConnectWithoutUnidadlibroInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUnidadlibroInput | reservaUpsertWithWhereUniqueWithoutUnidadlibroInput[]
    createMany?: reservaCreateManyUnidadlibroInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUnidadlibroInput | reservaUpdateWithWhereUniqueWithoutUnidadlibroInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUnidadlibroInput | reservaUpdateManyWithWhereWithoutUnidadlibroInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type historial_accesoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput> | historial_accesoCreateWithoutUsuarioInput[] | historial_accesoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutUsuarioInput | historial_accesoCreateOrConnectWithoutUsuarioInput[]
    createMany?: historial_accesoCreateManyUsuarioInputEnvelope
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
  }

  export type prestamoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput> | prestamoCreateWithoutUsuarioInput[] | prestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutUsuarioInput | prestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: prestamoCreateManyUsuarioInputEnvelope
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
  }

  export type reservaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput> | reservaCreateWithoutUsuarioInput[] | reservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUsuarioInput | reservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: reservaCreateManyUsuarioInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type usuario_categoria_interesCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput> | usuario_categoria_interesCreateWithoutUsuarioInput[] | usuario_categoria_interesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutUsuarioInput | usuario_categoria_interesCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_categoria_interesCreateManyUsuarioInputEnvelope
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
  }

  export type historial_accesoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput> | historial_accesoCreateWithoutUsuarioInput[] | historial_accesoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutUsuarioInput | historial_accesoCreateOrConnectWithoutUsuarioInput[]
    createMany?: historial_accesoCreateManyUsuarioInputEnvelope
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
  }

  export type prestamoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput> | prestamoCreateWithoutUsuarioInput[] | prestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutUsuarioInput | prestamoCreateOrConnectWithoutUsuarioInput[]
    createMany?: prestamoCreateManyUsuarioInputEnvelope
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
  }

  export type reservaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput> | reservaCreateWithoutUsuarioInput[] | reservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUsuarioInput | reservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: reservaCreateManyUsuarioInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type usuario_categoria_interesUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput> | usuario_categoria_interesCreateWithoutUsuarioInput[] | usuario_categoria_interesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutUsuarioInput | usuario_categoria_interesCreateOrConnectWithoutUsuarioInput[]
    createMany?: usuario_categoria_interesCreateManyUsuarioInputEnvelope
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
  }

  export type historial_accesoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput> | historial_accesoCreateWithoutUsuarioInput[] | historial_accesoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutUsuarioInput | historial_accesoCreateOrConnectWithoutUsuarioInput[]
    upsert?: historial_accesoUpsertWithWhereUniqueWithoutUsuarioInput | historial_accesoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historial_accesoCreateManyUsuarioInputEnvelope
    set?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    disconnect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    delete?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    update?: historial_accesoUpdateWithWhereUniqueWithoutUsuarioInput | historial_accesoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historial_accesoUpdateManyWithWhereWithoutUsuarioInput | historial_accesoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
  }

  export type prestamoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput> | prestamoCreateWithoutUsuarioInput[] | prestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutUsuarioInput | prestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: prestamoUpsertWithWhereUniqueWithoutUsuarioInput | prestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: prestamoCreateManyUsuarioInputEnvelope
    set?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    disconnect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    delete?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    update?: prestamoUpdateWithWhereUniqueWithoutUsuarioInput | prestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: prestamoUpdateManyWithWhereWithoutUsuarioInput | prestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
  }

  export type reservaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput> | reservaCreateWithoutUsuarioInput[] | reservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUsuarioInput | reservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUsuarioInput | reservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: reservaCreateManyUsuarioInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUsuarioInput | reservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUsuarioInput | reservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type usuario_categoria_interesUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput> | usuario_categoria_interesCreateWithoutUsuarioInput[] | usuario_categoria_interesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutUsuarioInput | usuario_categoria_interesCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_categoria_interesUpsertWithWhereUniqueWithoutUsuarioInput | usuario_categoria_interesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_categoria_interesCreateManyUsuarioInputEnvelope
    set?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    disconnect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    delete?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    update?: usuario_categoria_interesUpdateWithWhereUniqueWithoutUsuarioInput | usuario_categoria_interesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_categoria_interesUpdateManyWithWhereWithoutUsuarioInput | usuario_categoria_interesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
  }

  export type historial_accesoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput> | historial_accesoCreateWithoutUsuarioInput[] | historial_accesoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: historial_accesoCreateOrConnectWithoutUsuarioInput | historial_accesoCreateOrConnectWithoutUsuarioInput[]
    upsert?: historial_accesoUpsertWithWhereUniqueWithoutUsuarioInput | historial_accesoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: historial_accesoCreateManyUsuarioInputEnvelope
    set?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    disconnect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    delete?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    connect?: historial_accesoWhereUniqueInput | historial_accesoWhereUniqueInput[]
    update?: historial_accesoUpdateWithWhereUniqueWithoutUsuarioInput | historial_accesoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: historial_accesoUpdateManyWithWhereWithoutUsuarioInput | historial_accesoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
  }

  export type prestamoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput> | prestamoCreateWithoutUsuarioInput[] | prestamoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: prestamoCreateOrConnectWithoutUsuarioInput | prestamoCreateOrConnectWithoutUsuarioInput[]
    upsert?: prestamoUpsertWithWhereUniqueWithoutUsuarioInput | prestamoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: prestamoCreateManyUsuarioInputEnvelope
    set?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    disconnect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    delete?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    connect?: prestamoWhereUniqueInput | prestamoWhereUniqueInput[]
    update?: prestamoUpdateWithWhereUniqueWithoutUsuarioInput | prestamoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: prestamoUpdateManyWithWhereWithoutUsuarioInput | prestamoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
  }

  export type reservaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput> | reservaCreateWithoutUsuarioInput[] | reservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutUsuarioInput | reservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutUsuarioInput | reservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: reservaCreateManyUsuarioInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutUsuarioInput | reservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutUsuarioInput | reservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput> | usuario_categoria_interesCreateWithoutUsuarioInput[] | usuario_categoria_interesUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: usuario_categoria_interesCreateOrConnectWithoutUsuarioInput | usuario_categoria_interesCreateOrConnectWithoutUsuarioInput[]
    upsert?: usuario_categoria_interesUpsertWithWhereUniqueWithoutUsuarioInput | usuario_categoria_interesUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: usuario_categoria_interesCreateManyUsuarioInputEnvelope
    set?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    disconnect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    delete?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    connect?: usuario_categoria_interesWhereUniqueInput | usuario_categoria_interesWhereUniqueInput[]
    update?: usuario_categoria_interesUpdateWithWhereUniqueWithoutUsuarioInput | usuario_categoria_interesUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: usuario_categoria_interesUpdateManyWithWhereWithoutUsuarioInput | usuario_categoria_interesUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
  }

  export type categoriaCreateNestedOneWithoutUsuario_categoria_interesInput = {
    create?: XOR<categoriaCreateWithoutUsuario_categoria_interesInput, categoriaUncheckedCreateWithoutUsuario_categoria_interesInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuario_categoria_interesInput
    connect?: categoriaWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutUsuario_categoria_interesInput = {
    create?: XOR<usuarioCreateWithoutUsuario_categoria_interesInput, usuarioUncheckedCreateWithoutUsuario_categoria_interesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_categoria_interesInput
    connect?: usuarioWhereUniqueInput
  }

  export type categoriaUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput = {
    create?: XOR<categoriaCreateWithoutUsuario_categoria_interesInput, categoriaUncheckedCreateWithoutUsuario_categoria_interesInput>
    connectOrCreate?: categoriaCreateOrConnectWithoutUsuario_categoria_interesInput
    upsert?: categoriaUpsertWithoutUsuario_categoria_interesInput
    connect?: categoriaWhereUniqueInput
    update?: XOR<XOR<categoriaUpdateToOneWithWhereWithoutUsuario_categoria_interesInput, categoriaUpdateWithoutUsuario_categoria_interesInput>, categoriaUncheckedUpdateWithoutUsuario_categoria_interesInput>
  }

  export type usuarioUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput = {
    create?: XOR<usuarioCreateWithoutUsuario_categoria_interesInput, usuarioUncheckedCreateWithoutUsuario_categoria_interesInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutUsuario_categoria_interesInput
    upsert?: usuarioUpsertWithoutUsuario_categoria_interesInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutUsuario_categoria_interesInput, usuarioUpdateWithoutUsuario_categoria_interesInput>, usuarioUncheckedUpdateWithoutUsuario_categoria_interesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type libroCreateWithoutCategoriaInput = {
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    historial_acceso?: historial_accesoCreateNestedManyWithoutLibroInput
    editorial: editorialCreateNestedOneWithoutLibroInput
    unidadlibro?: unidadlibroCreateNestedManyWithoutLibroInput
  }

  export type libroUncheckedCreateWithoutCategoriaInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutLibroInput
    unidadlibro?: unidadlibroUncheckedCreateNestedManyWithoutLibroInput
  }

  export type libroCreateOrConnectWithoutCategoriaInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput>
  }

  export type libroCreateManyCategoriaInputEnvelope = {
    data: libroCreateManyCategoriaInput | libroCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type usuario_categoria_interesCreateWithoutCategoriaInput = {
    usuario: usuarioCreateNestedOneWithoutUsuario_categoria_interesInput
  }

  export type usuario_categoria_interesUncheckedCreateWithoutCategoriaInput = {
    id_usuario: number
  }

  export type usuario_categoria_interesCreateOrConnectWithoutCategoriaInput = {
    where: usuario_categoria_interesWhereUniqueInput
    create: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput>
  }

  export type usuario_categoria_interesCreateManyCategoriaInputEnvelope = {
    data: usuario_categoria_interesCreateManyCategoriaInput | usuario_categoria_interesCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type libroUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: libroWhereUniqueInput
    update: XOR<libroUpdateWithoutCategoriaInput, libroUncheckedUpdateWithoutCategoriaInput>
    create: XOR<libroCreateWithoutCategoriaInput, libroUncheckedCreateWithoutCategoriaInput>
  }

  export type libroUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: libroWhereUniqueInput
    data: XOR<libroUpdateWithoutCategoriaInput, libroUncheckedUpdateWithoutCategoriaInput>
  }

  export type libroUpdateManyWithWhereWithoutCategoriaInput = {
    where: libroScalarWhereInput
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type libroScalarWhereInput = {
    AND?: libroScalarWhereInput | libroScalarWhereInput[]
    OR?: libroScalarWhereInput[]
    NOT?: libroScalarWhereInput | libroScalarWhereInput[]
    id_libro?: IntFilter<"libro"> | number
    titulo?: StringFilter<"libro"> | string
    isbn?: StringFilter<"libro"> | string
    anio_publicacion?: IntNullableFilter<"libro"> | number | null
    idioma?: StringFilter<"libro"> | string
    resumen?: StringNullableFilter<"libro"> | string | null
    autores?: StringNullableListFilter<"libro">
    id_editorial?: IntFilter<"libro"> | number
    id_categoria?: IntFilter<"libro"> | number
  }

  export type usuario_categoria_interesUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: usuario_categoria_interesWhereUniqueInput
    update: XOR<usuario_categoria_interesUpdateWithoutCategoriaInput, usuario_categoria_interesUncheckedUpdateWithoutCategoriaInput>
    create: XOR<usuario_categoria_interesCreateWithoutCategoriaInput, usuario_categoria_interesUncheckedCreateWithoutCategoriaInput>
  }

  export type usuario_categoria_interesUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: usuario_categoria_interesWhereUniqueInput
    data: XOR<usuario_categoria_interesUpdateWithoutCategoriaInput, usuario_categoria_interesUncheckedUpdateWithoutCategoriaInput>
  }

  export type usuario_categoria_interesUpdateManyWithWhereWithoutCategoriaInput = {
    where: usuario_categoria_interesScalarWhereInput
    data: XOR<usuario_categoria_interesUpdateManyMutationInput, usuario_categoria_interesUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type usuario_categoria_interesScalarWhereInput = {
    AND?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
    OR?: usuario_categoria_interesScalarWhereInput[]
    NOT?: usuario_categoria_interesScalarWhereInput | usuario_categoria_interesScalarWhereInput[]
    id_usuario?: IntFilter<"usuario_categoria_interes"> | number
    id_categoria?: IntFilter<"usuario_categoria_interes"> | number
  }

  export type libroCreateWithoutEditorialInput = {
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    historial_acceso?: historial_accesoCreateNestedManyWithoutLibroInput
    categoria: categoriaCreateNestedOneWithoutLibroInput
    unidadlibro?: unidadlibroCreateNestedManyWithoutLibroInput
  }

  export type libroUncheckedCreateWithoutEditorialInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_categoria: number
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutLibroInput
    unidadlibro?: unidadlibroUncheckedCreateNestedManyWithoutLibroInput
  }

  export type libroCreateOrConnectWithoutEditorialInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput>
  }

  export type libroCreateManyEditorialInputEnvelope = {
    data: libroCreateManyEditorialInput | libroCreateManyEditorialInput[]
    skipDuplicates?: boolean
  }

  export type libroUpsertWithWhereUniqueWithoutEditorialInput = {
    where: libroWhereUniqueInput
    update: XOR<libroUpdateWithoutEditorialInput, libroUncheckedUpdateWithoutEditorialInput>
    create: XOR<libroCreateWithoutEditorialInput, libroUncheckedCreateWithoutEditorialInput>
  }

  export type libroUpdateWithWhereUniqueWithoutEditorialInput = {
    where: libroWhereUniqueInput
    data: XOR<libroUpdateWithoutEditorialInput, libroUncheckedUpdateWithoutEditorialInput>
  }

  export type libroUpdateManyWithWhereWithoutEditorialInput = {
    where: libroScalarWhereInput
    data: XOR<libroUpdateManyMutationInput, libroUncheckedUpdateManyWithoutEditorialInput>
  }

  export type libroCreateWithoutHistorial_accesoInput = {
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    categoria: categoriaCreateNestedOneWithoutLibroInput
    editorial: editorialCreateNestedOneWithoutLibroInput
    unidadlibro?: unidadlibroCreateNestedManyWithoutLibroInput
  }

  export type libroUncheckedCreateWithoutHistorial_accesoInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
    id_categoria: number
    unidadlibro?: unidadlibroUncheckedCreateNestedManyWithoutLibroInput
  }

  export type libroCreateOrConnectWithoutHistorial_accesoInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutHistorial_accesoInput, libroUncheckedCreateWithoutHistorial_accesoInput>
  }

  export type usuarioCreateWithoutHistorial_accesoInput = {
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    prestamo?: prestamoCreateNestedManyWithoutUsuarioInput
    reserva?: reservaCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutHistorial_accesoInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    prestamo?: prestamoUncheckedCreateNestedManyWithoutUsuarioInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutHistorial_accesoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutHistorial_accesoInput, usuarioUncheckedCreateWithoutHistorial_accesoInput>
  }

  export type libroUpsertWithoutHistorial_accesoInput = {
    update: XOR<libroUpdateWithoutHistorial_accesoInput, libroUncheckedUpdateWithoutHistorial_accesoInput>
    create: XOR<libroCreateWithoutHistorial_accesoInput, libroUncheckedCreateWithoutHistorial_accesoInput>
    where?: libroWhereInput
  }

  export type libroUpdateToOneWithWhereWithoutHistorial_accesoInput = {
    where?: libroWhereInput
    data: XOR<libroUpdateWithoutHistorial_accesoInput, libroUncheckedUpdateWithoutHistorial_accesoInput>
  }

  export type libroUpdateWithoutHistorial_accesoInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    categoria?: categoriaUpdateOneRequiredWithoutLibroNestedInput
    editorial?: editorialUpdateOneRequiredWithoutLibroNestedInput
    unidadlibro?: unidadlibroUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateWithoutHistorial_accesoInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    unidadlibro?: unidadlibroUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type usuarioUpsertWithoutHistorial_accesoInput = {
    update: XOR<usuarioUpdateWithoutHistorial_accesoInput, usuarioUncheckedUpdateWithoutHistorial_accesoInput>
    create: XOR<usuarioCreateWithoutHistorial_accesoInput, usuarioUncheckedCreateWithoutHistorial_accesoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutHistorial_accesoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutHistorial_accesoInput, usuarioUncheckedUpdateWithoutHistorial_accesoInput>
  }

  export type usuarioUpdateWithoutHistorial_accesoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    prestamo?: prestamoUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutHistorial_accesoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    prestamo?: prestamoUncheckedUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type historial_accesoCreateWithoutLibroInput = {
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
    usuario: usuarioCreateNestedOneWithoutHistorial_accesoInput
  }

  export type historial_accesoUncheckedCreateWithoutLibroInput = {
    id_acceso?: number
    id_usuario: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type historial_accesoCreateOrConnectWithoutLibroInput = {
    where: historial_accesoWhereUniqueInput
    create: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput>
  }

  export type historial_accesoCreateManyLibroInputEnvelope = {
    data: historial_accesoCreateManyLibroInput | historial_accesoCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type categoriaCreateWithoutLibroInput = {
    nombre_categoria: string
    descripcion?: string | null
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutLibroInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutLibroInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutLibroInput, categoriaUncheckedCreateWithoutLibroInput>
  }

  export type editorialCreateWithoutLibroInput = {
    nombre: string
    pais: string
    anio_fundacion?: number | null
  }

  export type editorialUncheckedCreateWithoutLibroInput = {
    id_editorial?: number
    nombre: string
    pais: string
    anio_fundacion?: number | null
  }

  export type editorialCreateOrConnectWithoutLibroInput = {
    where: editorialWhereUniqueInput
    create: XOR<editorialCreateWithoutLibroInput, editorialUncheckedCreateWithoutLibroInput>
  }

  export type unidadlibroCreateWithoutLibroInput = {
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroCreateNestedManyWithoutUnidadlibroInput
    reserva?: reservaCreateNestedManyWithoutUnidadlibroInput
  }

  export type unidadlibroUncheckedCreateWithoutLibroInput = {
    id_unidad?: number
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedCreateNestedManyWithoutUnidadlibroInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUnidadlibroInput
  }

  export type unidadlibroCreateOrConnectWithoutLibroInput = {
    where: unidadlibroWhereUniqueInput
    create: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput>
  }

  export type unidadlibroCreateManyLibroInputEnvelope = {
    data: unidadlibroCreateManyLibroInput | unidadlibroCreateManyLibroInput[]
    skipDuplicates?: boolean
  }

  export type historial_accesoUpsertWithWhereUniqueWithoutLibroInput = {
    where: historial_accesoWhereUniqueInput
    update: XOR<historial_accesoUpdateWithoutLibroInput, historial_accesoUncheckedUpdateWithoutLibroInput>
    create: XOR<historial_accesoCreateWithoutLibroInput, historial_accesoUncheckedCreateWithoutLibroInput>
  }

  export type historial_accesoUpdateWithWhereUniqueWithoutLibroInput = {
    where: historial_accesoWhereUniqueInput
    data: XOR<historial_accesoUpdateWithoutLibroInput, historial_accesoUncheckedUpdateWithoutLibroInput>
  }

  export type historial_accesoUpdateManyWithWhereWithoutLibroInput = {
    where: historial_accesoScalarWhereInput
    data: XOR<historial_accesoUpdateManyMutationInput, historial_accesoUncheckedUpdateManyWithoutLibroInput>
  }

  export type historial_accesoScalarWhereInput = {
    AND?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
    OR?: historial_accesoScalarWhereInput[]
    NOT?: historial_accesoScalarWhereInput | historial_accesoScalarWhereInput[]
    id_acceso?: IntFilter<"historial_acceso"> | number
    id_usuario?: IntFilter<"historial_acceso"> | number
    id_libro?: IntFilter<"historial_acceso"> | number
    fecha_consulta?: DateTimeNullableFilter<"historial_acceso"> | Date | string | null
    tipo_acceso?: StringNullableFilter<"historial_acceso"> | string | null
  }

  export type categoriaUpsertWithoutLibroInput = {
    update: XOR<categoriaUpdateWithoutLibroInput, categoriaUncheckedUpdateWithoutLibroInput>
    create: XOR<categoriaCreateWithoutLibroInput, categoriaUncheckedCreateWithoutLibroInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutLibroInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutLibroInput, categoriaUncheckedUpdateWithoutLibroInput>
  }

  export type categoriaUpdateWithoutLibroInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutLibroInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type editorialUpsertWithoutLibroInput = {
    update: XOR<editorialUpdateWithoutLibroInput, editorialUncheckedUpdateWithoutLibroInput>
    create: XOR<editorialCreateWithoutLibroInput, editorialUncheckedCreateWithoutLibroInput>
    where?: editorialWhereInput
  }

  export type editorialUpdateToOneWithWhereWithoutLibroInput = {
    where?: editorialWhereInput
    data: XOR<editorialUpdateWithoutLibroInput, editorialUncheckedUpdateWithoutLibroInput>
  }

  export type editorialUpdateWithoutLibroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type editorialUncheckedUpdateWithoutLibroInput = {
    id_editorial?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: StringFieldUpdateOperationsInput | string
    anio_fundacion?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type unidadlibroUpsertWithWhereUniqueWithoutLibroInput = {
    where: unidadlibroWhereUniqueInput
    update: XOR<unidadlibroUpdateWithoutLibroInput, unidadlibroUncheckedUpdateWithoutLibroInput>
    create: XOR<unidadlibroCreateWithoutLibroInput, unidadlibroUncheckedCreateWithoutLibroInput>
  }

  export type unidadlibroUpdateWithWhereUniqueWithoutLibroInput = {
    where: unidadlibroWhereUniqueInput
    data: XOR<unidadlibroUpdateWithoutLibroInput, unidadlibroUncheckedUpdateWithoutLibroInput>
  }

  export type unidadlibroUpdateManyWithWhereWithoutLibroInput = {
    where: unidadlibroScalarWhereInput
    data: XOR<unidadlibroUpdateManyMutationInput, unidadlibroUncheckedUpdateManyWithoutLibroInput>
  }

  export type unidadlibroScalarWhereInput = {
    AND?: unidadlibroScalarWhereInput | unidadlibroScalarWhereInput[]
    OR?: unidadlibroScalarWhereInput[]
    NOT?: unidadlibroScalarWhereInput | unidadlibroScalarWhereInput[]
    id_unidad?: IntFilter<"unidadlibro"> | number
    codigo_barra?: StringFilter<"unidadlibro"> | string
    id_libro?: IntFilter<"unidadlibro"> | number
    ubicacion_fisica?: StringFilter<"unidadlibro"> | string
    estado_fisico?: StringFilter<"unidadlibro"> | string
  }

  export type usuarioCreateWithoutPrestamoInput = {
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoCreateNestedManyWithoutUsuarioInput
    reserva?: reservaCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPrestamoInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutUsuarioInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPrestamoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPrestamoInput, usuarioUncheckedCreateWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroCreateWithoutPrestamoInput = {
    unidadlibro: unidadlibroCreateNestedOneWithoutPrestamo_unidadlibroInput
  }

  export type prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput = {
    id_unidad: number
  }

  export type prestamo_unidadlibroCreateOrConnectWithoutPrestamoInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    create: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroCreateManyPrestamoInputEnvelope = {
    data: prestamo_unidadlibroCreateManyPrestamoInput | prestamo_unidadlibroCreateManyPrestamoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutPrestamoInput = {
    update: XOR<usuarioUpdateWithoutPrestamoInput, usuarioUncheckedUpdateWithoutPrestamoInput>
    create: XOR<usuarioCreateWithoutPrestamoInput, usuarioUncheckedCreateWithoutPrestamoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPrestamoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPrestamoInput, usuarioUncheckedUpdateWithoutPrestamoInput>
  }

  export type usuarioUpdateWithoutPrestamoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPrestamoInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type prestamo_unidadlibroUpsertWithWhereUniqueWithoutPrestamoInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    update: XOR<prestamo_unidadlibroUpdateWithoutPrestamoInput, prestamo_unidadlibroUncheckedUpdateWithoutPrestamoInput>
    create: XOR<prestamo_unidadlibroCreateWithoutPrestamoInput, prestamo_unidadlibroUncheckedCreateWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroUpdateWithWhereUniqueWithoutPrestamoInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    data: XOR<prestamo_unidadlibroUpdateWithoutPrestamoInput, prestamo_unidadlibroUncheckedUpdateWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroUpdateManyWithWhereWithoutPrestamoInput = {
    where: prestamo_unidadlibroScalarWhereInput
    data: XOR<prestamo_unidadlibroUpdateManyMutationInput, prestamo_unidadlibroUncheckedUpdateManyWithoutPrestamoInput>
  }

  export type prestamo_unidadlibroScalarWhereInput = {
    AND?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
    OR?: prestamo_unidadlibroScalarWhereInput[]
    NOT?: prestamo_unidadlibroScalarWhereInput | prestamo_unidadlibroScalarWhereInput[]
    id_prestamo?: IntFilter<"prestamo_unidadlibro"> | number
    id_unidad?: IntFilter<"prestamo_unidadlibro"> | number
  }

  export type prestamoCreateWithoutPrestamo_unidadlibroInput = {
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    estado_prestamo: string
    usuario: usuarioCreateNestedOneWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateWithoutPrestamo_unidadlibroInput = {
    id_prestamo?: number
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    id_usuario: number
    estado_prestamo: string
  }

  export type prestamoCreateOrConnectWithoutPrestamo_unidadlibroInput = {
    where: prestamoWhereUniqueInput
    create: XOR<prestamoCreateWithoutPrestamo_unidadlibroInput, prestamoUncheckedCreateWithoutPrestamo_unidadlibroInput>
  }

  export type unidadlibroCreateWithoutPrestamo_unidadlibroInput = {
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
    reserva?: reservaCreateNestedManyWithoutUnidadlibroInput
    libro: libroCreateNestedOneWithoutUnidadlibroInput
  }

  export type unidadlibroUncheckedCreateWithoutPrestamo_unidadlibroInput = {
    id_unidad?: number
    codigo_barra: string
    id_libro: number
    ubicacion_fisica: string
    estado_fisico: string
    reserva?: reservaUncheckedCreateNestedManyWithoutUnidadlibroInput
  }

  export type unidadlibroCreateOrConnectWithoutPrestamo_unidadlibroInput = {
    where: unidadlibroWhereUniqueInput
    create: XOR<unidadlibroCreateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedCreateWithoutPrestamo_unidadlibroInput>
  }

  export type prestamoUpsertWithoutPrestamo_unidadlibroInput = {
    update: XOR<prestamoUpdateWithoutPrestamo_unidadlibroInput, prestamoUncheckedUpdateWithoutPrestamo_unidadlibroInput>
    create: XOR<prestamoCreateWithoutPrestamo_unidadlibroInput, prestamoUncheckedCreateWithoutPrestamo_unidadlibroInput>
    where?: prestamoWhereInput
  }

  export type prestamoUpdateToOneWithWhereWithoutPrestamo_unidadlibroInput = {
    where?: prestamoWhereInput
    data: XOR<prestamoUpdateWithoutPrestamo_unidadlibroInput, prestamoUncheckedUpdateWithoutPrestamo_unidadlibroInput>
  }

  export type prestamoUpdateWithoutPrestamo_unidadlibroInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateWithoutPrestamo_unidadlibroInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_usuario?: IntFieldUpdateOperationsInput | number
    estado_prestamo?: StringFieldUpdateOperationsInput | string
  }

  export type unidadlibroUpsertWithoutPrestamo_unidadlibroInput = {
    update: XOR<unidadlibroUpdateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedUpdateWithoutPrestamo_unidadlibroInput>
    create: XOR<unidadlibroCreateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedCreateWithoutPrestamo_unidadlibroInput>
    where?: unidadlibroWhereInput
  }

  export type unidadlibroUpdateToOneWithWhereWithoutPrestamo_unidadlibroInput = {
    where?: unidadlibroWhereInput
    data: XOR<unidadlibroUpdateWithoutPrestamo_unidadlibroInput, unidadlibroUncheckedUpdateWithoutPrestamo_unidadlibroInput>
  }

  export type unidadlibroUpdateWithoutPrestamo_unidadlibroInput = {
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    reserva?: reservaUpdateManyWithoutUnidadlibroNestedInput
    libro?: libroUpdateOneRequiredWithoutUnidadlibroNestedInput
  }

  export type unidadlibroUncheckedUpdateWithoutPrestamo_unidadlibroInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    id_libro?: IntFieldUpdateOperationsInput | number
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    reserva?: reservaUncheckedUpdateManyWithoutUnidadlibroNestedInput
  }

  export type unidadlibroCreateWithoutReservaInput = {
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroCreateNestedManyWithoutUnidadlibroInput
    libro: libroCreateNestedOneWithoutUnidadlibroInput
  }

  export type unidadlibroUncheckedCreateWithoutReservaInput = {
    id_unidad?: number
    codigo_barra: string
    id_libro: number
    ubicacion_fisica: string
    estado_fisico: string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedCreateNestedManyWithoutUnidadlibroInput
  }

  export type unidadlibroCreateOrConnectWithoutReservaInput = {
    where: unidadlibroWhereUniqueInput
    create: XOR<unidadlibroCreateWithoutReservaInput, unidadlibroUncheckedCreateWithoutReservaInput>
  }

  export type usuarioCreateWithoutReservaInput = {
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutReservaInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoUncheckedCreateNestedManyWithoutUsuarioInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutReservaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutReservaInput, usuarioUncheckedCreateWithoutReservaInput>
  }

  export type unidadlibroUpsertWithoutReservaInput = {
    update: XOR<unidadlibroUpdateWithoutReservaInput, unidadlibroUncheckedUpdateWithoutReservaInput>
    create: XOR<unidadlibroCreateWithoutReservaInput, unidadlibroUncheckedCreateWithoutReservaInput>
    where?: unidadlibroWhereInput
  }

  export type unidadlibroUpdateToOneWithWhereWithoutReservaInput = {
    where?: unidadlibroWhereInput
    data: XOR<unidadlibroUpdateWithoutReservaInput, unidadlibroUncheckedUpdateWithoutReservaInput>
  }

  export type unidadlibroUpdateWithoutReservaInput = {
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUpdateManyWithoutUnidadlibroNestedInput
    libro?: libroUpdateOneRequiredWithoutUnidadlibroNestedInput
  }

  export type unidadlibroUncheckedUpdateWithoutReservaInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    id_libro?: IntFieldUpdateOperationsInput | number
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroNestedInput
  }

  export type usuarioUpsertWithoutReservaInput = {
    update: XOR<usuarioUpdateWithoutReservaInput, usuarioUncheckedUpdateWithoutReservaInput>
    create: XOR<usuarioCreateWithoutReservaInput, usuarioUncheckedCreateWithoutReservaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutReservaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutReservaInput, usuarioUncheckedUpdateWithoutReservaInput>
  }

  export type usuarioUpdateWithoutReservaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutReservaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUncheckedUpdateManyWithoutUsuarioNestedInput
    usuario_categoria_interes?: usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type prestamo_unidadlibroCreateWithoutUnidadlibroInput = {
    prestamo: prestamoCreateNestedOneWithoutPrestamo_unidadlibroInput
  }

  export type prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput = {
    id_prestamo: number
  }

  export type prestamo_unidadlibroCreateOrConnectWithoutUnidadlibroInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    create: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput>
  }

  export type prestamo_unidadlibroCreateManyUnidadlibroInputEnvelope = {
    data: prestamo_unidadlibroCreateManyUnidadlibroInput | prestamo_unidadlibroCreateManyUnidadlibroInput[]
    skipDuplicates?: boolean
  }

  export type reservaCreateWithoutUnidadlibroInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    usuario: usuarioCreateNestedOneWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutUnidadlibroInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_usuario: number
  }

  export type reservaCreateOrConnectWithoutUnidadlibroInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput>
  }

  export type reservaCreateManyUnidadlibroInputEnvelope = {
    data: reservaCreateManyUnidadlibroInput | reservaCreateManyUnidadlibroInput[]
    skipDuplicates?: boolean
  }

  export type libroCreateWithoutUnidadlibroInput = {
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    historial_acceso?: historial_accesoCreateNestedManyWithoutLibroInput
    categoria: categoriaCreateNestedOneWithoutLibroInput
    editorial: editorialCreateNestedOneWithoutLibroInput
  }

  export type libroUncheckedCreateWithoutUnidadlibroInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
    id_categoria: number
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutLibroInput
  }

  export type libroCreateOrConnectWithoutUnidadlibroInput = {
    where: libroWhereUniqueInput
    create: XOR<libroCreateWithoutUnidadlibroInput, libroUncheckedCreateWithoutUnidadlibroInput>
  }

  export type prestamo_unidadlibroUpsertWithWhereUniqueWithoutUnidadlibroInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    update: XOR<prestamo_unidadlibroUpdateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedUpdateWithoutUnidadlibroInput>
    create: XOR<prestamo_unidadlibroCreateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedCreateWithoutUnidadlibroInput>
  }

  export type prestamo_unidadlibroUpdateWithWhereUniqueWithoutUnidadlibroInput = {
    where: prestamo_unidadlibroWhereUniqueInput
    data: XOR<prestamo_unidadlibroUpdateWithoutUnidadlibroInput, prestamo_unidadlibroUncheckedUpdateWithoutUnidadlibroInput>
  }

  export type prestamo_unidadlibroUpdateManyWithWhereWithoutUnidadlibroInput = {
    where: prestamo_unidadlibroScalarWhereInput
    data: XOR<prestamo_unidadlibroUpdateManyMutationInput, prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroInput>
  }

  export type reservaUpsertWithWhereUniqueWithoutUnidadlibroInput = {
    where: reservaWhereUniqueInput
    update: XOR<reservaUpdateWithoutUnidadlibroInput, reservaUncheckedUpdateWithoutUnidadlibroInput>
    create: XOR<reservaCreateWithoutUnidadlibroInput, reservaUncheckedCreateWithoutUnidadlibroInput>
  }

  export type reservaUpdateWithWhereUniqueWithoutUnidadlibroInput = {
    where: reservaWhereUniqueInput
    data: XOR<reservaUpdateWithoutUnidadlibroInput, reservaUncheckedUpdateWithoutUnidadlibroInput>
  }

  export type reservaUpdateManyWithWhereWithoutUnidadlibroInput = {
    where: reservaScalarWhereInput
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyWithoutUnidadlibroInput>
  }

  export type reservaScalarWhereInput = {
    AND?: reservaScalarWhereInput | reservaScalarWhereInput[]
    OR?: reservaScalarWhereInput[]
    NOT?: reservaScalarWhereInput | reservaScalarWhereInput[]
    id_reserva?: IntFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
    id_usuario?: IntFilter<"reserva"> | number
    id_unidad?: IntFilter<"reserva"> | number
  }

  export type libroUpsertWithoutUnidadlibroInput = {
    update: XOR<libroUpdateWithoutUnidadlibroInput, libroUncheckedUpdateWithoutUnidadlibroInput>
    create: XOR<libroCreateWithoutUnidadlibroInput, libroUncheckedCreateWithoutUnidadlibroInput>
    where?: libroWhereInput
  }

  export type libroUpdateToOneWithWhereWithoutUnidadlibroInput = {
    where?: libroWhereInput
    data: XOR<libroUpdateWithoutUnidadlibroInput, libroUncheckedUpdateWithoutUnidadlibroInput>
  }

  export type libroUpdateWithoutUnidadlibroInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    historial_acceso?: historial_accesoUpdateManyWithoutLibroNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutLibroNestedInput
    editorial?: editorialUpdateOneRequiredWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateWithoutUnidadlibroInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type historial_accesoCreateWithoutUsuarioInput = {
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
    libro: libroCreateNestedOneWithoutHistorial_accesoInput
  }

  export type historial_accesoUncheckedCreateWithoutUsuarioInput = {
    id_acceso?: number
    id_libro: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type historial_accesoCreateOrConnectWithoutUsuarioInput = {
    where: historial_accesoWhereUniqueInput
    create: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput>
  }

  export type historial_accesoCreateManyUsuarioInputEnvelope = {
    data: historial_accesoCreateManyUsuarioInput | historial_accesoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type prestamoCreateWithoutUsuarioInput = {
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    estado_prestamo: string
    prestamo_unidadlibro?: prestamo_unidadlibroCreateNestedManyWithoutPrestamoInput
  }

  export type prestamoUncheckedCreateWithoutUsuarioInput = {
    id_prestamo?: number
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    estado_prestamo: string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedCreateNestedManyWithoutPrestamoInput
  }

  export type prestamoCreateOrConnectWithoutUsuarioInput = {
    where: prestamoWhereUniqueInput
    create: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type prestamoCreateManyUsuarioInputEnvelope = {
    data: prestamoCreateManyUsuarioInput | prestamoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type reservaCreateWithoutUsuarioInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    unidadlibro: unidadlibroCreateNestedOneWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutUsuarioInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_unidad: number
  }

  export type reservaCreateOrConnectWithoutUsuarioInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput>
  }

  export type reservaCreateManyUsuarioInputEnvelope = {
    data: reservaCreateManyUsuarioInput | reservaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type usuario_categoria_interesCreateWithoutUsuarioInput = {
    categoria: categoriaCreateNestedOneWithoutUsuario_categoria_interesInput
  }

  export type usuario_categoria_interesUncheckedCreateWithoutUsuarioInput = {
    id_categoria: number
  }

  export type usuario_categoria_interesCreateOrConnectWithoutUsuarioInput = {
    where: usuario_categoria_interesWhereUniqueInput
    create: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_categoria_interesCreateManyUsuarioInputEnvelope = {
    data: usuario_categoria_interesCreateManyUsuarioInput | usuario_categoria_interesCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type historial_accesoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: historial_accesoWhereUniqueInput
    update: XOR<historial_accesoUpdateWithoutUsuarioInput, historial_accesoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<historial_accesoCreateWithoutUsuarioInput, historial_accesoUncheckedCreateWithoutUsuarioInput>
  }

  export type historial_accesoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: historial_accesoWhereUniqueInput
    data: XOR<historial_accesoUpdateWithoutUsuarioInput, historial_accesoUncheckedUpdateWithoutUsuarioInput>
  }

  export type historial_accesoUpdateManyWithWhereWithoutUsuarioInput = {
    where: historial_accesoScalarWhereInput
    data: XOR<historial_accesoUpdateManyMutationInput, historial_accesoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type prestamoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: prestamoWhereUniqueInput
    update: XOR<prestamoUpdateWithoutUsuarioInput, prestamoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<prestamoCreateWithoutUsuarioInput, prestamoUncheckedCreateWithoutUsuarioInput>
  }

  export type prestamoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: prestamoWhereUniqueInput
    data: XOR<prestamoUpdateWithoutUsuarioInput, prestamoUncheckedUpdateWithoutUsuarioInput>
  }

  export type prestamoUpdateManyWithWhereWithoutUsuarioInput = {
    where: prestamoScalarWhereInput
    data: XOR<prestamoUpdateManyMutationInput, prestamoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type prestamoScalarWhereInput = {
    AND?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
    OR?: prestamoScalarWhereInput[]
    NOT?: prestamoScalarWhereInput | prestamoScalarWhereInput[]
    id_prestamo?: IntFilter<"prestamo"> | number
    fecha_prestamo?: DateTimeFilter<"prestamo"> | Date | string
    fecha_entrega?: DateTimeNullableFilter<"prestamo"> | Date | string | null
    id_usuario?: IntFilter<"prestamo"> | number
    estado_prestamo?: StringFilter<"prestamo"> | string
  }

  export type reservaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: reservaWhereUniqueInput
    update: XOR<reservaUpdateWithoutUsuarioInput, reservaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<reservaCreateWithoutUsuarioInput, reservaUncheckedCreateWithoutUsuarioInput>
  }

  export type reservaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: reservaWhereUniqueInput
    data: XOR<reservaUpdateWithoutUsuarioInput, reservaUncheckedUpdateWithoutUsuarioInput>
  }

  export type reservaUpdateManyWithWhereWithoutUsuarioInput = {
    where: reservaScalarWhereInput
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type usuario_categoria_interesUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_categoria_interesWhereUniqueInput
    update: XOR<usuario_categoria_interesUpdateWithoutUsuarioInput, usuario_categoria_interesUncheckedUpdateWithoutUsuarioInput>
    create: XOR<usuario_categoria_interesCreateWithoutUsuarioInput, usuario_categoria_interesUncheckedCreateWithoutUsuarioInput>
  }

  export type usuario_categoria_interesUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: usuario_categoria_interesWhereUniqueInput
    data: XOR<usuario_categoria_interesUpdateWithoutUsuarioInput, usuario_categoria_interesUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuario_categoria_interesUpdateManyWithWhereWithoutUsuarioInput = {
    where: usuario_categoria_interesScalarWhereInput
    data: XOR<usuario_categoria_interesUpdateManyMutationInput, usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type categoriaCreateWithoutUsuario_categoria_interesInput = {
    nombre_categoria: string
    descripcion?: string | null
    libro?: libroCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaUncheckedCreateWithoutUsuario_categoria_interesInput = {
    id_categoria?: number
    nombre_categoria: string
    descripcion?: string | null
    libro?: libroUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type categoriaCreateOrConnectWithoutUsuario_categoria_interesInput = {
    where: categoriaWhereUniqueInput
    create: XOR<categoriaCreateWithoutUsuario_categoria_interesInput, categoriaUncheckedCreateWithoutUsuario_categoria_interesInput>
  }

  export type usuarioCreateWithoutUsuario_categoria_interesInput = {
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoCreateNestedManyWithoutUsuarioInput
    reserva?: reservaCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutUsuario_categoria_interesInput = {
    id_usuario?: number
    nombre: string
    apellido: string
    email: string
    telefono: string
    direccion: string
    tipo_usuario: string
    historial_acceso?: historial_accesoUncheckedCreateNestedManyWithoutUsuarioInput
    prestamo?: prestamoUncheckedCreateNestedManyWithoutUsuarioInput
    reserva?: reservaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutUsuario_categoria_interesInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutUsuario_categoria_interesInput, usuarioUncheckedCreateWithoutUsuario_categoria_interesInput>
  }

  export type categoriaUpsertWithoutUsuario_categoria_interesInput = {
    update: XOR<categoriaUpdateWithoutUsuario_categoria_interesInput, categoriaUncheckedUpdateWithoutUsuario_categoria_interesInput>
    create: XOR<categoriaCreateWithoutUsuario_categoria_interesInput, categoriaUncheckedCreateWithoutUsuario_categoria_interesInput>
    where?: categoriaWhereInput
  }

  export type categoriaUpdateToOneWithWhereWithoutUsuario_categoria_interesInput = {
    where?: categoriaWhereInput
    data: XOR<categoriaUpdateWithoutUsuario_categoria_interesInput, categoriaUncheckedUpdateWithoutUsuario_categoria_interesInput>
  }

  export type categoriaUpdateWithoutUsuario_categoria_interesInput = {
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUpdateManyWithoutCategoriaNestedInput
  }

  export type categoriaUncheckedUpdateWithoutUsuario_categoria_interesInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
    nombre_categoria?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type usuarioUpsertWithoutUsuario_categoria_interesInput = {
    update: XOR<usuarioUpdateWithoutUsuario_categoria_interesInput, usuarioUncheckedUpdateWithoutUsuario_categoria_interesInput>
    create: XOR<usuarioCreateWithoutUsuario_categoria_interesInput, usuarioUncheckedCreateWithoutUsuario_categoria_interesInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutUsuario_categoria_interesInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutUsuario_categoria_interesInput, usuarioUncheckedUpdateWithoutUsuario_categoria_interesInput>
  }

  export type usuarioUpdateWithoutUsuario_categoria_interesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutUsuario_categoria_interesInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    tipo_usuario?: StringFieldUpdateOperationsInput | string
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutUsuarioNestedInput
    prestamo?: prestamoUncheckedUpdateManyWithoutUsuarioNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type libroCreateManyCategoriaInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_editorial: number
  }

  export type usuario_categoria_interesCreateManyCategoriaInput = {
    id_usuario: number
  }

  export type libroUpdateWithoutCategoriaInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    historial_acceso?: historial_accesoUpdateManyWithoutLibroNestedInput
    editorial?: editorialUpdateOneRequiredWithoutLibroNestedInput
    unidadlibro?: unidadlibroUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateWithoutCategoriaInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutLibroNestedInput
    unidadlibro?: unidadlibroUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateManyWithoutCategoriaInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_editorial?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_categoria_interesUpdateWithoutCategoriaInput = {
    usuario?: usuarioUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput
  }

  export type usuario_categoria_interesUncheckedUpdateWithoutCategoriaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_categoria_interesUncheckedUpdateManyWithoutCategoriaInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type libroCreateManyEditorialInput = {
    id_libro?: number
    titulo: string
    isbn: string
    anio_publicacion?: number | null
    idioma: string
    resumen?: string | null
    autores?: libroCreateautoresInput | string[]
    id_categoria: number
  }

  export type libroUpdateWithoutEditorialInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    historial_acceso?: historial_accesoUpdateManyWithoutLibroNestedInput
    categoria?: categoriaUpdateOneRequiredWithoutLibroNestedInput
    unidadlibro?: unidadlibroUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateWithoutEditorialInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_categoria?: IntFieldUpdateOperationsInput | number
    historial_acceso?: historial_accesoUncheckedUpdateManyWithoutLibroNestedInput
    unidadlibro?: unidadlibroUncheckedUpdateManyWithoutLibroNestedInput
  }

  export type libroUncheckedUpdateManyWithoutEditorialInput = {
    id_libro?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    anio_publicacion?: NullableIntFieldUpdateOperationsInput | number | null
    idioma?: StringFieldUpdateOperationsInput | string
    resumen?: NullableStringFieldUpdateOperationsInput | string | null
    autores?: libroUpdateautoresInput | string[]
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type historial_accesoCreateManyLibroInput = {
    id_acceso?: number
    id_usuario: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type unidadlibroCreateManyLibroInput = {
    id_unidad?: number
    codigo_barra: string
    ubicacion_fisica: string
    estado_fisico: string
  }

  export type historial_accesoUpdateWithoutLibroInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: usuarioUpdateOneRequiredWithoutHistorial_accesoNestedInput
  }

  export type historial_accesoUncheckedUpdateWithoutLibroInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_accesoUncheckedUpdateManyWithoutLibroInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_usuario?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type unidadlibroUpdateWithoutLibroInput = {
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUpdateManyWithoutUnidadlibroNestedInput
    reserva?: reservaUpdateManyWithoutUnidadlibroNestedInput
  }

  export type unidadlibroUncheckedUpdateWithoutLibroInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroNestedInput
    reserva?: reservaUncheckedUpdateManyWithoutUnidadlibroNestedInput
  }

  export type unidadlibroUncheckedUpdateManyWithoutLibroInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
    codigo_barra?: StringFieldUpdateOperationsInput | string
    ubicacion_fisica?: StringFieldUpdateOperationsInput | string
    estado_fisico?: StringFieldUpdateOperationsInput | string
  }

  export type prestamo_unidadlibroCreateManyPrestamoInput = {
    id_unidad: number
  }

  export type prestamo_unidadlibroUpdateWithoutPrestamoInput = {
    unidadlibro?: unidadlibroUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput
  }

  export type prestamo_unidadlibroUncheckedUpdateWithoutPrestamoInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type prestamo_unidadlibroUncheckedUpdateManyWithoutPrestamoInput = {
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type prestamo_unidadlibroCreateManyUnidadlibroInput = {
    id_prestamo: number
  }

  export type reservaCreateManyUnidadlibroInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_usuario: number
  }

  export type prestamo_unidadlibroUpdateWithoutUnidadlibroInput = {
    prestamo?: prestamoUpdateOneRequiredWithoutPrestamo_unidadlibroNestedInput
  }

  export type prestamo_unidadlibroUncheckedUpdateWithoutUnidadlibroInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
  }

  export type prestamo_unidadlibroUncheckedUpdateManyWithoutUnidadlibroInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
  }

  export type reservaUpdateWithoutUnidadlibroInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutUnidadlibroInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type reservaUncheckedUpdateManyWithoutUnidadlibroInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
  }

  export type historial_accesoCreateManyUsuarioInput = {
    id_acceso?: number
    id_libro: number
    fecha_consulta?: Date | string | null
    tipo_acceso?: string | null
  }

  export type prestamoCreateManyUsuarioInput = {
    id_prestamo?: number
    fecha_prestamo?: Date | string
    fecha_entrega?: Date | string | null
    estado_prestamo: string
  }

  export type reservaCreateManyUsuarioInput = {
    id_reserva?: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    id_unidad: number
  }

  export type usuario_categoria_interesCreateManyUsuarioInput = {
    id_categoria: number
  }

  export type historial_accesoUpdateWithoutUsuarioInput = {
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
    libro?: libroUpdateOneRequiredWithoutHistorial_accesoNestedInput
  }

  export type historial_accesoUncheckedUpdateWithoutUsuarioInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_libro?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type historial_accesoUncheckedUpdateManyWithoutUsuarioInput = {
    id_acceso?: IntFieldUpdateOperationsInput | number
    id_libro?: IntFieldUpdateOperationsInput | number
    fecha_consulta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo_acceso?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type prestamoUpdateWithoutUsuarioInput = {
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUpdateManyWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateWithoutUsuarioInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
    prestamo_unidadlibro?: prestamo_unidadlibroUncheckedUpdateManyWithoutPrestamoNestedInput
  }

  export type prestamoUncheckedUpdateManyWithoutUsuarioInput = {
    id_prestamo?: IntFieldUpdateOperationsInput | number
    fecha_prestamo?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_prestamo?: StringFieldUpdateOperationsInput | string
  }

  export type reservaUpdateWithoutUsuarioInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    unidadlibro?: unidadlibroUpdateOneRequiredWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type reservaUncheckedUpdateManyWithoutUsuarioInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    id_unidad?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_categoria_interesUpdateWithoutUsuarioInput = {
    categoria?: categoriaUpdateOneRequiredWithoutUsuario_categoria_interesNestedInput
  }

  export type usuario_categoria_interesUncheckedUpdateWithoutUsuarioInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
  }

  export type usuario_categoria_interesUncheckedUpdateManyWithoutUsuarioInput = {
    id_categoria?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}