"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[48142],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},69709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={id:"index",title:"Introduction to ZIO Akka Cluster",sidebar_label:"ZIO Akka Cluster"},s=void 0,o={unversionedId:"zio-akka-cluster/index",id:"zio-akka-cluster/index",title:"Introduction to ZIO Akka Cluster",description:"This library is a ZIO wrapper for Akka Cluster.",source:"@site/docs/zio-akka-cluster/index.md",sourceDirName:"zio-akka-cluster",slug:"/zio-akka-cluster/",permalink:"/zio-akka-cluster/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-akka-cluster/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Akka Cluster",sidebar_label:"ZIO Akka Cluster"},sidebar:"ecosystem-sidebar",previous:{title:"Examples",permalink:"/zio-actors/examples"},next:{title:"ZIO Bson",permalink:"/zio-bson/"}},l={},u=[{value:"Add the dependency",id:"add-the-dependency",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Akka Cluster",id:"akka-cluster",level:3},{value:"Akka PubSub",id:"akka-pubsub",level:3},{value:"Akka Cluster Sharding",id:"akka-cluster-sharding",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This library is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio"},"ZIO")," wrapper for ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/index-cluster.html"},"Akka Cluster"),".\nIt exposes a purely functional API allowing you to leverage the distributed features of Akka without the need to use the actor model."),(0,r.kt)("p",null,"The following features are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Akka Cluster (join, leave, cluster state, cluster events)"),(0,r.kt)("li",{parentName:"ul"},"Akka Distributed PubSub"),(0,r.kt)("li",{parentName:"ul"},"Akka Cluster Sharding")),(0,r.kt)("h2",{id:"add-the-dependency"},"Add the dependency"),(0,r.kt)("p",null,"To use ",(0,r.kt)("inlineCode",{parentName:"p"},"zio-akka-cluster"),", add the following line in your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio-akka-cluster" % "0.3.0"\n')),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"In order to use the library, you need to provide an ",(0,r.kt)("inlineCode",{parentName:"p"},"ActorSystem"),". Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/general/actor-systems.html"},"Akka Documentation")," if you need help."),(0,r.kt)("h3",{id:"akka-cluster"},"Akka Cluster"),(0,r.kt)("p",null,"The features described here require the following import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.akka.cluster.Cluster\n")),(0,r.kt)("p",null,"When you create an ActorSystem, Akka will look at your configuration file and join a cluster if seed nodes are specified.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/cluster-usage.html"},"Akka Documentation")," to know more about cluster usage.\nYou can also manually join a cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster.join"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def join(seedNodes: List[Address]): ZIO[ActorSystem, Throwable, Unit]\n")),(0,r.kt)("p",null,"It's possible to get the status of the cluster by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster.clusterState")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val clusterState: ZIO[ActorSystem, Throwable, CurrentClusterState]\n")),(0,r.kt)("p",null,"To monitor the cluster and be informed of changes (e.g. new members, member unreachable, etc), use ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster.clusterEvents"),".\nThis functions returns a ZIO ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that will be populated with the cluster events as they happen.\nThe returned queue is unbounded, but if you want to supply your own bounded queue, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster.clusterEventsWith"),".\nTo unsubscribe, simply ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," the queue.\n",(0,r.kt)("inlineCode",{parentName:"p"},"initialStateAsEvents")," indicates if you want to receive previous cluster events leading to the current state, or only future events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def clusterEvents(initialStateAsEvents: Boolean = false): ZIO[ActorSystem, Throwable, Queue[ClusterDomainEvent]]\n")),(0,r.kt)("p",null,"Finally, you can leave the current cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster.leave"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val leave: ZIO[ActorSystem, Throwable, Unit]\n")),(0,r.kt)("h3",{id:"akka-pubsub"},"Akka PubSub"),(0,r.kt)("p",null,"The features described here require the following import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.akka.cluster.pubsub.PubSub\n")),(0,r.kt)("p",null,"Akka Distributed PubSub lets you publish and receive events from any node in the cluster.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/distributed-pub-sub.html"},"Akka Documentation")," to know more about PubSub usage.\nTo create a ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSub")," object which can both publish and subscribe, use ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSub.createPubSub"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def createPubSub[A]: ZIO[ActorSystem, Throwable, PubSub[A]]\n")),(0,r.kt)("p",null,"There are also less powerful variants ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSub.createPublisher")," if you only need to publish and ",(0,r.kt)("inlineCode",{parentName:"p"},"PubSub.createSubscriber")," if you only need to subscribe."),(0,r.kt)("p",null,"To publish a message, use ",(0,r.kt)("inlineCode",{parentName:"p"},"publish"),". It requires the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"topic")," you want to publish to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," is the message to publish."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sendOneMessageToEachGroup")," can be used in order to send the message not to all subscribers but to only one subscriber per group.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def publish(topic: String, data: A, sendOneMessageToEachGroup: Boolean = false): Task[Unit]\n")),(0,r.kt)("p",null,"To subscribe to messages, use ",(0,r.kt)("inlineCode",{parentName:"p"},"listen"),".  It requires the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"topic")," you want to subscribe to."),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"group")," name if you want only one subscriber per group to receive each message, to be used with ",(0,r.kt)("inlineCode",{parentName:"li"},"sendOneMessageToEachGroup=true"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"listen")," returns an unbounded ZIO ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," that will be populated with the messages. To use a bounded queue, use ",(0,r.kt)("inlineCode",{parentName:"p"},"listenWith")," instead.\nNote that ",(0,r.kt)("inlineCode",{parentName:"p"},"listen")," waits for the subscription acknowledgment before completing, which means that once it completes, all messages published will be received.\nTo stop listening, simply ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown")," the queue."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def listen(topic: String, group: Option[String] = None): Task[Queue[A]] =\n    Queue.unbounded[A].tap(listenWith(topic, _, group))\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note on Serialization"),"\nAkka messages are serialized when they are sent across the network. By default, Java serialization is used but it is not recommended to use it in production.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/serialization.html"},"Akka Documentation")," to see how to provide your own serializer.\nThis library wraps messages inside of a ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.akka.cluster.pubsub.MessageEnvelope")," case class, so your serializer needs to cover it as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import akka.actor.ActorSystem\nimport zio.{ ZIO, ZLayer }\nimport zio.akka.cluster.pubsub.PubSub\n\nval actorSystem: ZLayer[Any, Throwable, ActorSystem] =\n  ZLayer\n    .scoped(\n      ZIO.acquireRelease(ZIO.attempt(ActorSystem("Test")))(sys => ZIO.fromFuture(_ => sys.terminate()).either)\n    )\n\n(for {\n  pubSub   <- PubSub.createPubSub[String]\n  queue    <- pubSub.listen("my-topic")\n  _        <- pubSub.publish("my-topic", "yo")\n  firstMsg <- queue.take\n} yield firstMsg).provideLayer(actorSystem)\n')),(0,r.kt)("h3",{id:"akka-cluster-sharding"},"Akka Cluster Sharding"),(0,r.kt)("p",null,"The features described here require the following import:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.akka.cluster.sharding.Sharding\n")),(0,r.kt)("p",null,"Akka Cluster Sharding lets you distribute entities across a cluster and communicate with them using a logical ID, without having to care about their physical location.\nIt is particularly useful when you have some business logic that needs to be processed by a single process across a cluster (e.g. some state that should be only in one place at a given time, a single writer to a database, etc).\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/cluster-sharding.html"},"Akka Documentation")," to know more about Cluster Sharding usage."),(0,r.kt)("p",null,"To start sharding a given entity type on a node, use ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding.start"),". It returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding")," object which can be used to send messages, stop or passivate sharded entities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def start[R, Msg, State](\n    name: String,\n    onMessage: Msg => ZIO[Entity[State] with R, Nothing, Unit],\n    numberOfShards: Int = 100\n  ): ZIO[ActorSystem with R, Throwable, Sharding[Msg]]\n")),(0,r.kt)("p",null,"It requires:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," of the entity type. Entities will be distributed on all the nodes of the cluster where ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," was called with this ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"onMessage")," is the behavior of the sharded entity. For each received message, it will run an effect of type ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO[Entity[State], Nothing, Unit]"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Entity[State]")," gives you access to a ",(0,r.kt)("inlineCode",{parentName:"li"},"Ref[Option[State]]")," which you can use to read or modify the state of the entity. The state is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," when the entity is started. This ",(0,r.kt)("inlineCode",{parentName:"li"},"Entity")," object also allows you to get the entity ID and to stop the entity from within (e.g. after some time of inactivity)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Nothing")," means the effect should not fail, you must catch and handle potential errors"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unit")," means the effect should not return anything"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numberOfShards")," indicates how entities will be split across nodes. See ",(0,r.kt)("a",{parentName:"li",href:"https://doc.akka.io/docs/akka/current/cluster-sharding.html#an-example"},"this page")," for more information.")),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"Sharding.startProxy")," if you need to send messages to entities located on ",(0,r.kt)("inlineCode",{parentName:"p"},"other")," nodes."),(0,r.kt)("p",null,"To send a message to a sharded entity without expecting a response, use ",(0,r.kt)("inlineCode",{parentName:"p"},"send"),". To send a message to a sharded entity expecting a response, use ",(0,r.kt)("inlineCode",{parentName:"p"},"ask"),". To stop one, use ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"entityId")," identifies the entity to target. Messages sent to the same ",(0,r.kt)("inlineCode",{parentName:"p"},"entityId")," from different nodes in the cluster will be handled by the same actor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def send(entityId: String, data: M): Task[Unit]\ndef ask[R](entityId: String, data: M): Task[R]\ndef stop(entityId: String): Task[Unit]\ndef passivate(entityId: String): Task[Unit]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note on Serialization"),"\nAkka messages are serialized when they are sent across the network. By default, Java serialization is used, but it is not recommended in production.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka/current/serialization.html"},"Akka Documentation")," to see how to provide your own serializer.\nThis library wraps messages inside of a ",(0,r.kt)("inlineCode",{parentName:"p"},"zio.akka.cluster.sharding.MessageEnvelope")," case class, so your serializer needs to cover it as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import akka.actor.ActorSystem\nimport zio.akka.cluster.sharding.{ Entity, Sharding }\nimport zio.{ ZIO, ZLayer }\n\nval actorSystem: ZLayer[Any, Throwable, ActorSystem] =\n  ZLayer\n    .scoped(\n      ZIO.acquireRelease(ZIO.attempt(ActorSystem("Test")))(sys => ZIO.fromFuture(_ => sys.terminate()).either)\n    )\n\nval behavior: String => ZIO[Entity[Int], Nothing, Unit] = {\n  case "+" => ZIO.serviceWithZIO[Entity[Int]](_.state.update(x => Some(x.getOrElse(0) + 1)))\n  case "-" => ZIO.serviceWithZIO[Entity[Int]](_.state.update(x => Some(x.getOrElse(0) - 1)))\n  case _   => ZIO.unit\n}\n\n(for {\n  sharding <- Sharding.start("session", behavior)\n  entityId = "1"\n  _        <- sharding.send(entityId, "+")\n  _        <- sharding.send(entityId, "+")\n  _        <- sharding.send(entityId, "-")\n} yield ()).provideLayer(actorSystem)\n')))}c.isMDXComponent=!0}}]);