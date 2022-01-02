import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { IIndexView } from "../../app/view/index/IIndexView";
import { IndexView } from "../../app/view/index/impl/IndexView";
import { IndexPresenter } from "../../app/presenter/index/IndexPresenter";
import { Main } from "../../app/Main";
import { IImageClassifier } from "../../app/model/combined-detector/IImageClassifier";
import { ImageClassifier } from "../../app/model/combined-detector/impl/ImageClassifier";

const container = new Container({ defaultScope: 'Singleton' });

container.bind<Main>(TYPES.Main).to(Main);
container.bind<IImageClassifier>(TYPES.ImageClassifier).to(ImageClassifier);
container.bind<IIndexView>(TYPES.IndexView).to(IndexView);
container.bind<IndexPresenter>(TYPES.IndexPresenter).to(IndexPresenter);

export { container }